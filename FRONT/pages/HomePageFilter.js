import { Selector, t } from "testcafe";

class HomePageFilter {

    constructor() {
        this.mainTitle = Selector('.title').withText('PRODUCTS')
        this.FirstProduct = Selector('.inventory_item_name').withText('Sauce Labs Backpack')
        this.NewFilter = Selector('.product_sort_container')
        this.FilterLoHi = Selector('.product_sort_container').withText('Price (low to high)')
        
    }
    async filterSelector() {
        await t.click(this.NewFilter)
        await t.click(this.FilterLoHi)
        await t.expect(Selector('.inventory_item_name').count).notEql(2);
    }
    
}

export default new HomePageFilter