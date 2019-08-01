import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/index'
import MV from '../pages/mv'
import newsong from '../pages/newsong'
import footer from '../components/Footer/Footer'
import radioStation from '../pages/radioStation'
import mymusic from "@/pages/mymusic";
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
    },
    /**************我的音乐页面路由配置*****************/
    {
      path: "/mymusic",redirect:'/mymusic/mycreate_tab',
      name: "mymusic",
      component: mymusic,
      children:[
        {path:'mycreate_tab',mymusic},
        {path:'focus_tab',mymusic},
        {path:'fans_tab',mymusic},
        {path:'mylike_tab',mymusic}
      ]
    }

  ]
})
