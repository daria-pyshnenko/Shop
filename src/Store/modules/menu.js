export default {
    namespaced:true,
    state:{
        items:[
            {
                url: '/products',
                text: 'Products list'
            },
            {
                url: '/cart',
                text: 'Your cart'
            },
            {
                url: '/checkout',
                text: 'Order now'
            }
        ]
    },
    getters:{
        items(state){
            return state.items
        }
    }
}