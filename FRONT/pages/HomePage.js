import { Selector, t } from 'testcafe'

class HomePage {
  constructor () {
    this.mainTitle = Selector('.title').withText('PRODUCTS')
    this.cartButton = Selector('#shopping_cart_container')
    this.selectJacketOption = Selector('#item_5_img_link')
    this.addToCartJacketOption = Selector('#add-to-cart-sauce-labs-fleece-jacket')
    this.menuButton = Selector('#react-burger-menu-btn')
    this.logoutButton = Selector('#logout_sidebar_link')
  }

  async addToCart () {
    await t
      .click(this.addToCartJacketOption)
      .expect(this.cartButton.exists).ok()
      .click(this.cartButton)
  }

  async selectItem () {
    await t.click(this.selectJacketOption)
  }

  async mainTitleExist () {
    await t.expect(this.mainTitle.exists).ok()
  }

  async logoutHome () {
    await t
      .click(this.menuButton)
      .click(this.logoutButton)
  }
}

export default new HomePage()
