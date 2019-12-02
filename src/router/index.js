import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  userlist  from '@/components/user-list'
import  updatePage  from '@/components/update-page'
import  userinsert  from '@/components/user-insert'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'userlist',
      component: userlist
    },{
    path:'/updatePage/:id',
      name:'updatePage',
      component:updatePage
    },
    {
      path:'/insertPage',
      name:'userinsert',
      component:userinsert
    }

  ]
})
