
export default {
    namespaced: true,
    state: {
        items: getProducts()
    },
    getters: {
        items(state) {
            return state.items
        },
        itemsMap(state) {
            let itemsMap = {};
            for (let i in state.items) {
                let product = state.items[i];
                itemsMap[product.idProduct] = product;
            }
            return itemsMap
        },
        item: (state, getters) => (id) => {
            return getters.itemsMap[id]
        }
    }
}

function getProducts() {
    return [
        {
            idProduct: 1,
            title: 'Iphone 5',
            price: 2000

        },
        {
            idProduct: 2,
            title: 'Iphone 6',
            price: 2500

        },
        {
            idProduct: 3,
            title: 'Iphone 7',
            price: 3000

        }
    ]
}