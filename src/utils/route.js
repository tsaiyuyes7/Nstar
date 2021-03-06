import ProductsCategory from '../page/ProductsCategory';
import ProductDetail from "../page/ProductDetail";
import UserCart from "../page/UserCart";
import Home from '../page/Home';
import LogIn from '../page/LogIn';
import SignUp from '../page/SignUp';
import UserCheckout from '../page/UserCheckout';
import UserCheckoutSuccess from '../page/UserCheckoutSuccess';
import UserProductShop from '../page/UserProductsShop';
import UserOrderQuery from '../page/UserOrderQuery';
import UserLike from '../page/UserLike';
import UserProductDetail from '../page/UserProductDetail';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/product/category/:category',
        component: ProductsCategory,
        exact: true,
    },
    {
        path: '/product/detail/:category/:product_id',
        component: ProductDetail,
        exact: true,

    },
    {
        path: '/usercart',
        component: UserCart,
        exact: true,
    },
    {
        path: '/usercart/usercheckout',
        component: UserCheckout,
        exact: true,
    },
    {
        path: '/usercart/usercheckoutsuccess',
        component: UserCheckoutSuccess,
        exact: true,
    },
    {
        path: '/signup',
        component: SignUp,
        exact: true,
    },
    {
        path: '/login',
        component: LogIn,
        exact: true,
    },
    {
        path: '/userproductshop',
        component: UserProductShop,
        exact: true,
    },
    {
        path: '/userproductshop/detail/:product_id',
        component: UserProductDetail,
        exact: true,
    },
    {
        path: '/userorderquery/:type',
        component: UserOrderQuery,
        exact: true,
    },
    {
        path: '/userlike',
        component: UserLike,
        exact: true,
    }
]

export { routes }

// {
//     path:'/product/personal/:id',
//     component:
// },
