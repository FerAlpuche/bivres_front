import Vue from 'vue'
import VueRouter from 'vue-router'

//LIBRARIAN
import RegistrarReporte from '../views/Admin/RegistrarReporte.vue'
import ModificarReporte from '../views/Admin/ModificarReporte.vue'
import BajaEstudiante from '../views/Admin/BajaEstudiante.vue'
import RegistroBibliotecario from '../views/Admin/RegistroBibliotecario.vue'
import DivisionAcademica from '../views/Admin/DivisionAcademica.vue'
import ConsultarReportesLibrarian from '../views/Admin/ConsultarReportes.vue'
import ConsultarSolicitudes from '../views/Admin/ConsultarSolicitudes.vue'

//STUDENT
import ConsultarReportesStudent from '../views/Estudiantes/ConsultarReportes.vue'

//ALL
import Login from "../views/Login.vue";
import LoginLibrarian from "../components/InicioSesionBibliotecario.vue";
import RegistroEstudiante from '../views/Estudiantes/RegistroEstudiante.vue'

//ERRORS
import Error401 from "../components/Error401.vue";
import Error403 from "../components/Error403.vue";
import Error404 from "../components/Error404.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/librarian/login",
    name: "LoginLibrarian",
    component: LoginLibrarian
  },
  {
    path: "/logout",
    name: "Logout",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isAuthenticated") == 1) {
        localStorage.setItem("isAuthenticated", 0)
        localStorage.setItem("role", null)
      }
      next("/")
    }
  },
  {
    path: '/librarian/registro-bibliotecario',
    name: 'RegistroBibliotecario',
    component: RegistroBibliotecario,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isAuthenticated") != 1) {
        next("/error/401")
      }else if (localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") == "librarian") {
        next()
      }else if(localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") != "librarian"){
        next("/error/403")
      }
    }
  },
  {
    path: '/librarian/consultar-solicitudes',
    name: 'ConsultarSolicitudes',
    component: ConsultarSolicitudes,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isAuthenticated") != 1) {
        next("/error/401")
      }else if (localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") == "librarian") {
        next()
      }else if(localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") != "librarian"){
        next("/error/403")
      }
    }
  },
  {
    path: '/librarian/baja-estudiante',
    name: 'BajaEstudiante',
    component: BajaEstudiante,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isAuthenticated") != 1) {
        next("/error/401")
      }else if (localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") == "librarian") {
        next()
      }else if(localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") != "librarian"){
        next("/error/403")
      }
    }
  },
  {
    path: '/librarian/registrar-reporte',
    name: 'RegistrarReporte',
    component: RegistrarReporte,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isAuthenticated") != 1) {
        next("/error/401")
      }else if (localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") == "librarian") {
        next()
      }else if(localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") != "librarian"){
        next("/error/403")
      }
    }
  },
  {
    path: '/librarian/modificar-reporte/:idReport',
    name: 'ModificarReporte',
    component: ModificarReporte,
    props: true,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isAuthenticated") != 1) {
        next("/error/401")
      }else if (localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") == "librarian") {
        next()
      }else if(localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") != "librarian"){
        next("/error/403")
      }
    }
  },
  {
    path: '/librarian/consultar-reportes',
    name: 'ConsultarReportesLibrarian',
    component: ConsultarReportesLibrarian,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isAuthenticated") != 1) {
        next("/error/401")
      }else if (localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") == "librarian") {
        next()
      }else if(localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") != "librarian"){
        next("/error/403")
      }
    }
  },
  {
    path: '/librarian/registrar-division',
    name: 'RegistrarDivision',
    component: DivisionAcademica,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isAuthenticated") != 1) {
        next("/error/401")
      }else if (localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") == "librarian") {
        next()
      }else if(localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") != "librarian"){
        next("/error/403")
      }
    }
  },
  {
    path: '/student/registro-estudiante',
    name: 'RegistroEstudiante',
    component: RegistroEstudiante,
  },
  {
    path: '/student/consultar-reportes',
    name: 'ConsultarReportes',
    component: ConsultarReportesStudent,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") == "student") {
        next()
      }else{
        next("/error/403")
      }
    }
  },
  {
    path: '/error/401',
    name: "Error401",
    component: Error401
  },
  {
    path: '/error/403',
    name: "Error403",
    component: Error403
  },
  {
    path: '*',
    name: "Error404",
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name == 'Login' && localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") == "librarian") next("/librarian/registrar-reporte")
  else if (to.name == 'Login' && localStorage.getItem("isAuthenticated") == 1 && localStorage.getItem("role") == "student") next("/student/consultar-reportes")
  else next()
})

export default router;