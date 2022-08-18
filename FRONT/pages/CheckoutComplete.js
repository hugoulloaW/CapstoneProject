import { Selector, t } from 'testcafe'

class CheckoutComplete {
  constructor () {
    this.checkoutCompleteTitle = Selector('.title').withText('CHECKOUT: COMPLETE!')
    this.completeOrderText = Selector('.complete-header').withText('THANK YOU FOR YOUR ORDER')
    this.backHomeButton = Selector('#back-to-products')
  }

  async checkoutProcessComplete () {
    await t
      .expect(this.checkoutCompleteTitle.exists).ok()
      .expect(this.completeOrderText.exists).ok()
  }

  async backHome () {
    await t.click(this.backHomeButton)
  }
}
export default new CheckoutComplete()
