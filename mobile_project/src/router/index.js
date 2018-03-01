import Vue from 'vue'

import Router from 'vue-router'
import box from '../components/';
import Home from '../components/home';
import all from '../components/all';
import good from '../components/good';
import ask from '../components/ask';
import dev from '../components/dev';
import job from '../components/job';
import share from '../components/share';
import page from '../components/discus';
import login from '../components/login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      component:box,
      children:[
        {path:'/home',component:Home,children:[
            {path:'/all',component:all,name:'all'},
            {path:'/good',component:good,name:'good'},
            {path:'/ask',component:ask,name:'ask'},
            {path:'/share',component:share,name:'share'},
            {path:'/job',component:job,name:'job'},
            {path:'/dev',component:dev,name:'dev'},
            {path:'/home',redirect:'/all'}
          ]},
        {path:'page/:id',component:page,name:'page'},
        {path:'/',redirect:'/home'}
        ]
    },
    {path:'/login',component:login,name:'login'}
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})
