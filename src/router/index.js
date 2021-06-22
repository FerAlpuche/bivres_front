import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import RegistroEstudiante from '../views/Estudiantes/RegistroEstudiante.vue'
import ConsultarReportes from '../views/Estudiantes/ConsultarReportes.vue'
import RegistroBibliotecario from '../views/Admin/RegistroBibliotecario.vue'
import BajaEstudiante from '../views/Admin/BajaEstudiante.vue'
import RegistrarReporte from '../views/Admin/RegistrarReporte.vue'

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
  },
  {
    path: '/registro-bibliotecario',
    name: 'RegistroBibliotecario',
    component: RegistroBibliotecario
  },
  {
    path: '/baja-estudiante',
    name: 'BajaEstudiante',
    component: BajaEstudiante
  },
  {
    path: '/consultar-reportes',
    name: 'ConsultarReportes',
    component: ConsultarReportes
  },
  {
    path: '/registrar-reporte',
    name: 'RegistrarReporte',
    component: RegistrarReporte
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;