<template>
  <div>
    <headerAdmin />
    <br />
    <div class="funciones">
      <h3>Baja de Estudiantes</h3>
    </div>
    <b-container>
      <div class="mt-5">
        <b-table-simple responsive stripped hover>
          <b-thead head-variant="light">
            <b-tr>
              <b-th>Nombre</b-th>
              <b-th>Apellido Paterno</b-th>
              <b-th>Apellido Materno</b-th>
              <b-th>Carrera</b-th>
              <b-th>Grado</b-th>
              <b-th>Grupo</b-th>
              <b-th>Acción</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>
                <b-button size="lg" variant="link" class="mb-2">
                  <b-icon icon="x-circle" variant="danger"></b-icon>
                </b-button>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>
                <b-button size="lg" variant="link" class="mb-2">
                  <b-icon icon="x-circle" variant="danger"></b-icon>
                </b-button>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-container>
    <fondo />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import fondo from "../../components/Fondo";
import headerAdmin from "../../components/HeaderAdmin";
//import api from "../../util/api";
Vue.use(VueRouter);
export default {
  name: "BajaEstudiante",
  components: {
    fondo,
    headerAdmin,
  },
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>
<style scoped>
.funciones {
  color: #0d6efd;
  width: 100%;
  text-align: left;
  margin-left: 5%;
  border-left: 3px solid #0d6efd;
  height: 45px;
}
.funciones > h3 {
  line-height: 50px;
  margin-left: 0.5%;
}
</style> 