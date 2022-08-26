/* eslint-disable no-undef */

import { URLS } from '../data/Constants'
import { STANDART_USER } from '../data/Roles'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import ItemPage from '../pages/ItemPage'
// importar libreria testcafe para uso codigo, y las paginas que se utilizarán para el test

// fixture setea el ambiente de pruebas
fixture('products feature')
// pagina destino de prueba
  .page`${URLS.LOGIN_URL}`
// Los hooks (beforeeach y aftereach) es el codigo que se ejecuta para preparar el test o al finalizar el test.
  .beforeEach(async t => (
    await t.useRole(STANDART_USER)
  ))
// estructura de los test (cada prueba debe ser individualmente) ".only" nos indica que es la única que se va a correr
test('as a user i must be able to add a product into the shopping cart', async t => {
  // al mandar llamar las funciones ya no es necesario que los objetos vivan en el codigo principal, dejándolo limpio.
  await HomePage.addToCart()
  await CartPage.validateProduct()
})

test('as a user i must validate that the item selected is correct', async t => {
  await HomePage.selectItem()
  await ItemPage.correctItem()
})
