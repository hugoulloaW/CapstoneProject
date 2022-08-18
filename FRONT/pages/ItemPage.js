import { Selector, t } from 'testcafe'

class ItemPage {
  constructor () {
    this.itemName = Selector('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size').withText('Sauce Labs Fleece Jacket')
    this.itemDescription = Selector('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_desc.large_size').withText("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.")
    this.itemPrice = Selector('.inventory_details_price').withText('49.99')
    this.addToCartItem = Selector('input[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
  }

  async correctItem () {
    await t
      .expect(this.itemName.exists).ok()
      .expect(this.itemDescription.exists).ok()
      .expect(this.itemPrice.exists).ok()
  }
}
export default new ItemPage()
