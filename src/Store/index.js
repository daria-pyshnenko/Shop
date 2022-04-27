import {createStore} from "vuex"
import menu from './modules/menu.js'
import products from './modules/products.js'
import cart from './modules/cart.js'
import check from './modules/check.js';

const store = createStore({
    modules: {
        menu,
        products,
        cart,
        check
    },

    strict: process.env.NODE_ENV !== 'production'
})
export default store