import { Selector, t } from 'testcafe'

class CartPage {
  constructor () {
    this.cartTitle = Selector('.title').withText('YOUR CART')
    this.itemName = Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket')
    this.itemDescription = Selector('.inventory_item_desc').withText("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.")
    this.checkoutButton = Selector('#checkout')
  }

  async validateProduct () {
    await t
      .expect(this.cartTitle.exists).ok()
      .expect(this.itemName.exists).ok()
      .expect(this.itemDescription.exists).ok()
  }

  async cartTitleExist () {
    await t.expect(this.cartTitle.exists).ok()
  }

  async goToCheckout () {
    await t.click(this.checkoutButton)
  }
}

export default new CartPage()
