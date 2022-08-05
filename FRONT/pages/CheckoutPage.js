import { Selector, t } from 'testcafe'

class CheckoutPage {
  constructor () {
    this.checkoutTitle = Selector('.title').withText('CHECKOUT: OVERVIEW')
    this.checkoutItemName = Selector('#item_5_title_link > div').withText('Sauce Labs Fleece Jacket')
    this.paymentSummary = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(2)').withText('SauceCard #31337')
    this.finishButton = Selector('#finish')
  }

  async checkoutProcess () {
    await t.expect(this.checkoutTitle.exists).ok()
    await t.expect(this.checkoutItemName.exists).ok()
    await t.expect(this.paymentSummary.exists).ok()
    await t.click(this.finishButton)
  }
}
export default new CheckoutPage()
