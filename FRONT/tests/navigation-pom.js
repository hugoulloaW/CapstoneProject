/* eslint-disable no-undef */
import { URLS, CREDENTIALS } from '../data/Constants'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'

fixture('navigation between the saucedemo pages')
  .page`${URLS.LOGIN_URL}`
test('As a user I must validate the titles between navigation', async t => {
  await LoginPage.logoHomeExist()
  await LoginPage.submitLoginForm(CREDENTIALS.STANDART_USER.USERNAME, CREDENTIALS.STANDART_USER.PASSWORD)
  await HomePage.mainTitleExist()
  await HomePage.addToCart()
  await CartPage.validateProduct()
  await CartPage.cartTitleExist()
})
