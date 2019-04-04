import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "./views/About.vue"
import index from "./views/index.vue"
import route1 from "./components/route1.vue"
import overview from "./components/overview.vue"
import tables from "./components/tables.vue"
import queue from "./components/queue.vue"
import order from "./components/order.vue"
import queueorder from "./components/queueorder.vue"
import dish from "./components/dish.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: "index",
          name: "index",
          component: index,
          children:[
            {
              path:"",
              name:"route1",
              component:route1
            },
            {
              path:"overview",
              name:"overview",
              component:overview
            },
            {
              path:"tables",
              name:"tables",
              component:tables
            },
            {
              path:"queue",
              name:"queue",
              component:queue
            },
            {
              path:"order",
              name:"order",
              component:order
            },
            {
              path:'queueorder',
              name:'queueorder',
              component:queueorder
            },
            {
              path:'dish',
              name:'dish',
              component:dish
            },
          ]
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    }
  ]
})
