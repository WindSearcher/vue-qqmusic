import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      component:Index
    },
    {
      path:'/',
      redirect:'/index'
    }
  ]
})
