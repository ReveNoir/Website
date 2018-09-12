import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Index',
    hide: true,
    component: () => import("@/views/Index")
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router