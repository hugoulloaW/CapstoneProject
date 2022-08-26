/* eslint-disable no-undef */
import { URLS } from '../data/Constants'
import { STANDART_USER } from '../data/Roles'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'

fixture('navigation between the saucedemo pages')
  .page`${URLS.LOGIN_URL}`
test('As a user I must validate the titles between navigation', async t => {
  await LoginPage.logoHomeExist()
  await t.useRole(STANDART_USER)
  await HomePage.mainTitleExist()
  await HomePage.addToCart()
  await CartPage.validateProduct()
  await CartPage.cartTitleExist()
})
