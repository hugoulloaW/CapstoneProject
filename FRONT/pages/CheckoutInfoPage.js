import { Selector, t } from 'testcafe'

class CheckoutInfoPage {
  constructor () {
    this.checkoutInfoTitle = Selector('.title').withText('CHECKOUT: YOUR INFORMATION')
    this.firstNameField = Selector('input[data-test="firstName"]')
    this.lastNameField = Selector('input[data-test="lastName"]')
    this.zipcodeField = Selector('input[data-test="postalCode"]')
    this.continueButton = Selector('input[data-test="continue"]')
  }

  async fillCheckoutInfo (firstName, lastName, postalCode) {
    await t
      .typeText(this.firstNameField, firstName)
      .typeText(this.lastNameField, lastName)
    // eslint-disable-next-line no-undef
      .typeText(this.zipcodeField, postalCode)
      .click(this.continueButton)
  }

  async checkoutInfoExist () {
    await t.expect(this.checkoutInfoTitle.exists).ok()
  }
}
export default new CheckoutInfoPage()
