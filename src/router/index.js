import Vue from 'vue'
import VueRouter from 'vue-router'
import RegistroEstudiante from '../views/RegistroEstudiante.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/registro-estudiante',
    name: 'RegistroEstudiante',
    component: RegistroEstudiante
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router