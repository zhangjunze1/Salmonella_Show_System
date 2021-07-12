import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/host',
        name: 'Host',
        component: () => import('../views/Information/Host.vue')
      },
      {
        path: '/apply',
        name: 'Apply',
        component: () => import('../views/Information/AssRelevant/Apply.vue')
      },
      {
        path: '/enroll',
        name: 'Enroll',
        component: () => import('../views/Information/AssRelevant/Enroll.vue')
      },
      {
        path: '/preActivity',
        name: 'PreActivity',
        component: () => import('../views/Information/MyCenter/PreActivity.vue')
      },
      {
        path: '/myAss',
        name: 'MyAss',
        component: () => import('../views/Information/MyCenter/MyAss.vue')
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('../views/Information/MyCenter/Mine.vue')
      },
      {
        path: '/myAss/:assId/activity',
        name: 'AssItem',
        component: () => import('../views/Information/MyCenter/AssItem.vue')
      },
      {
        path: '/activity/:activityId/content',
        name: 'ActivityContent',
        component: () => import('../views/Information/MyCenter/ActivityContent.vue')
      },
      {
        path: '/activity/:activityId/endcontent',
        name: 'ActivityEndContent',
        component: () => import('../views/Information/MyCenter/ActivityEndContent.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
