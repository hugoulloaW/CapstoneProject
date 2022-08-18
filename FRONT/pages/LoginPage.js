// asi se importa la libreria testcafe
import { Selector, t } from 'testcafe'
// se declara la clase LoginPage
class LoginPage {
  // se declara un constructor para definir los objetos de la pagina
  constructor () {
    // La palabra reservada "this" es para declarar que es una propuedad especifica de la clase arriba declarada.
    this.homeLogo = Selector('.login_logo')
    this.userField = Selector('input[data-test="username"]')
    this.passwordField = Selector('input[data-test="password"]')
    this.loginButton = Selector('input[data-test="login-button"]')
    this.errorMessage = Selector('#login_button_container > div > form > div.error-message-container.error > h3')
    this.errorMessagePass = Selector('#login_button_container > div > form > div.error-message-container.error > h3').withText('Epic sadface: Password is required')
    this.errorMessageUser = Selector('#login_button_container > div > form > div.error-message-container.error > h3').withText('Epic sadface: Username is required')
  }

  // se declara un metodo "submitloginform" que va a especificar todas las acciones del método, como typetex, click etc...
  // el método recibe dos parámetros con los que va a trabajar;
  async submitLoginForm (username, password) {
    await t
      .typeText(this.userField, username)
      .typeText(this.passwordField, password)
      .click(this.loginButton)
  }

  async submitForm (username) {
    await t
      .typeText(this.userField, username)
      .click(this.loginButton)
  }

  async submitFormPass (password) {
    await t
      .typeText(this.passwordField, password)
      .click(this.loginButton)
  }

  async logoHomeExist () {
    await t.expect(this.homeLogo.exists).ok()
  }
}
// Se exporta la clase para que pueda ser utilizada por otros archivos.
export default new LoginPage()
