import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('/page/index.vue')
const Search = () => import('/page/Search/search.vue')
const Register = () => import('/page/Register/register.vue')
const Account = () => import('/page/Account/account.vue')
const ForgetPassword = () => import('/page/ForgetPassword/forgetPassword.vue')
const Orders = () => import('/page/Orders/orders.vue')
const OrderDetail = () => import('/page/Orders/orderDetail.vue')
const Packget = () => import('/page/Packget/packget.vue')



// const Login = () => import('/page/Login/login.vue')
const Home = () => import('/page/Home/home.vue')

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/home',
      children: [
        {path: 'home',name: 'home', component: Home},
        {path: 'search', name: 'search', component: Search},
        {path: 'register', name: 'register', component: Register},
        {path: 'forgetPassword', name: 'forgetPassword', component: ForgetPassword},
        {path: 'account', name: 'account', component: Account},
        {path: 'orders', name: 'orders', component: Orders},
        {path: 'orderDetail', name: 'orderDetail', component: OrderDetail},
        {path: 'packget', name: 'packget', component: Packget},
      ]
    },
    // {path: '/login', name: 'login', component: Login},
    {path: '*', redirect: '/home'}
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})


