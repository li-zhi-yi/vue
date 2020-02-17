import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home'


Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'product/:id',
          component:()=>import('./views/product.vue')
        }
      ]
    },
    {
      path:'/category',
      component:()=>import('./views/category/category.vue')
    },
    {
      path:'/cart',
      component:()=>import('./views/cart/cart.vue')
    },
    {
      path:'/personal',
      component:()=>import('./views/personal/personal.vue')
    },
    {
      path:'*',
      component:()=>import('./views/home/home.vue')
    }
  ]
})
