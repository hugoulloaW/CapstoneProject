// Importamos las URL y credenciales de un "data provider" llamado constants
/* eslint-disable no-undef */
import { URLS, CREDENTIALS } from '../data/Constants'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

// fixture setea el ambiente de pruebas
fixture('login fixture with pom')
// pagina destino de prueba
  .page`${URLS.LOGIN_URL}`
// estructura de los test (cada prueba debe ser individualmente) ".only" nos indica que es la única que se va a correr
test('login succesfull', async t => {
  // mandamos llamar el método "submitloginform" que viene de la pagina "loginpage", enviando dos parámetros que necesita
  // credentials accede al arreglo standart user del data provider llamado constanst, accediendo al parametro username y/o passwords.
  await LoginPage.submitLoginForm(CREDENTIALS.STANDART_USER.USERNAME, CREDENTIALS.STANDART_USER.PASSWORD)
  // mandamos llamar el objeto "maintitle" que proviene de la pagina "homepage".
  await t.expect(HomePage.mainTitle.exists).ok()
})

test('login unsuccessfull', async t => {
  await LoginPage.submitLoginForm(CREDENTIALS.STANDART_USER.BADUSERNAME, CREDENTIALS.STANDART_USER.BADPASSWORD)
  await t.expect(LoginPage.errorMessage.exists).ok()
})

test('Login unsuccessfull without password', async t => {
  await LoginPage.submitForm(CREDENTIALS.STANDART_USER.USERNAME)
  await t.expect(LoginPage.errorMessagePass.exists).ok()
})

test('Login unsuccessfull without username', async t => {
  await LoginPage.submitFormPass(CREDENTIALS.STANDART_USER.PASSWORD)
  await t.expect(LoginPage.errorMessageUser.exists).ok()
})
