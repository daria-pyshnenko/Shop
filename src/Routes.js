import { createWebHistory, createRouter } from "vue-router";
import ProductsList from "./components/ProductsList.vue";
import Cart from "./components/Cart.vue";
import E404 from "./components/E404.vue";
import CheckOut from "./components/CheckOut.vue";
import Product from "./components/Product.vue";


const routes = [
    {
        path: "/",
        redirect:{name:'products'},

    },
    {
        path: "/products",
        name:'products',
        component: ProductsList
    },
    {
        path: "/product/:id",
        name:'product',
        component: Product
    },

    {
        path: "/cart",
        name:'cart',
        component: Cart
    },
    {
        path: "/:pathMatch(.*)*",
        name:'notFound',
        component: E404
    },
    {
        path: "/checkOut",
        name:'checkOut',
        component: CheckOut
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
