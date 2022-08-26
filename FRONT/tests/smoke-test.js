/* eslint-disable no-undef */
import { URLS, CHECKOUT_INFO } from '../data/Constants'
import { STANDART_USER } from '../data/Roles'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import CheckoutPage from '../pages/CheckoutPage'
import CheckoutInfoPage from '../pages/CheckoutInfoPage'
import CheckoutComplete from '../pages/CheckoutComplete'
import CartPage from '../pages/CartPage'

fixture('Smoke Test')
  .page`${URLS.LOGIN_URL}`
  .beforeEach(async t => {
    await t.useRole(STANDART_USER)
  })
test('Smoke test for the Swag Lab Website', async t => {
  await HomePage.mainTitleExist()
  await HomePage.addToCart()
  await CartPage.cartTitleExist()
  await CartPage.validateProduct()
  await CartPage.goToCheckout()
  await CheckoutInfoPage.checkoutInfoExist()
  await CheckoutInfoPage.fillCheckoutInfo(CHECKOUT_INFO.CHECKOUT.FIRSTNAMEINPUT, CHECKOUT_INFO.CHECKOUT.LASTNAMEINPUT, CHECKOUT_INFO.CHECKOUT.ZIPCODEINPUT)
  await CheckoutPage.checkoutProcess()
  await CheckoutComplete.checkoutProcessComplete()
  await CheckoutComplete.backHome()
  await HomePage.logoutHome()
  await LoginPage.logoHomeExist()
})
