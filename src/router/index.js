import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/index'
import MV from '../pages/mv'
import newsong from '../pages/newsong'
import footer from '../components/Footer/Footer'
import radioStation from '../pages/radioStation'
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
    },
    {
      path:'/mv',
      component:MV
    },
    {
      path:'/newsong',
      component:newsong
    },
    {
      path:'/footer',
      component:footer
    },
    {
      path:'/radioStation',
      component:radioStation
    }
  ]
})
