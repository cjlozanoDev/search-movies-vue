import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto'
import Legal from '../views/Legal'
import DetailMovie from '../views/DetailMovie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal
  },
  {
    path: '/detail/:idmovie',
    name: 'Detail',
    component: DetailMovie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
