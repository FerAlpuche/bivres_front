<template>
  <div>
    <headerAdmin />
    <br />
    <div class="funciones">
      <h3>Restablecer contraseña</h3>
    </div>
    <b-container>
      <div class="mt-5">
        <b-table-simple responsive hover>
          <b-thead>
            <b-tr>
              <b-th>Nombre completo</b-th>
              <b-th>Matrícula</b-th>
              <b-th>Correo electrónico</b-th>
              <b-th>Carrera</b-th>
              <b-th>División académica</b-th>
              <b-th>Nivel</b-th>
              <b-th>Restablecer contraseña</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr
              v-for="student in students"
              v-bind:key="student.idStudentData"
            >
              <b-td>{{ student.firstName + " " + student.lastName }}</b-td>
              <b-td>{{ student.enrollment }}</b-td>
              <b-td>{{ student.email }}</b-td>
              <b-td>{{ student.degree }}</b-td>
              <b-td>{{ student.divisionAcronym }}</b-td>
              <b-td>{{ student.levelAcronym }}</b-td>
              <b-td>
                <b-button size="lg" variant="link" class="mb-2">
                  <b-icon
                    icon="key-fill"
                    variant="primary"
                    @click="passwordReset(student.idStudentData)"
                  ></b-icon>
                </b-button>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import headerAdmin from "../../components/HeaderAdmin";
import api from "../../util/api";
import Swal from "sweetalert2";

Vue.use(VueRouter);

export default {
  name: "BajaEstudiante",
  components: {
    headerAdmin,
  },
  data() {
    return {
      students: [],
    };
  },
  methods: {
    passwordReset(student) {
    //   const dataStudents = this;
      Swal.fire({
        title: "Restablecer contraseña",
        text:"Se enviará un correo electrónico al estudiante con una nueva contraseña",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          api
            .doPost(`/api/users/recovery/${student}`)
            .then(function ({ data }) {
              if (data.status) {
                Swal.fire("Contraseña restablecida", "Se envío un correo electrónico al estudiante con su nueva contraseña", "success",);
              }
            })
            .catch(function (error) {
              if (error.response.data.message) {
                Swal.fire("Error", error.response.data.message, "error");
              }
            });
        }
      });
    },
  },
  mounted() {
    api
      .doGet("api/students/")
      .then((response) => {
        this.students = response.data;
      })
      .catch((error) => {
        if (error) {
          console.log("Error al obtener las solicitudes ",error);
        }
      });
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
