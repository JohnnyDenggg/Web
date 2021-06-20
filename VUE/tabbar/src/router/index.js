import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Catogory = () => import('../views/catogory/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/catogory',
      component:Catogory
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    }
  ],
  mode: 'history'
})
