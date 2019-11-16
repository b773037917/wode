import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../components/login.vue'
import reg from '../components/reg'
import wode from '../components/wode'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/wode',
    name: 'wode',
    component: wode} ,
    { path: '/reg',
    name: 'reg',
    component: reg} ,
     
   { path: '/login',
   name: 'login',
   component: login} ,
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
