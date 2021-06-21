import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import RegistroEstudiante from '../views/RegistroEstudiante.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
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
});

export default router;