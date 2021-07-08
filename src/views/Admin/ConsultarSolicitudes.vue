<template>
  <div>
    <headerAdmin />
    <br />
    <div class="funciones">
      <h3>Consultar solicitudes de estudiantes</h3>
    </div>
    <b-container>
      <div class="mt-5">
        <b-table-simple responsive hover>
          <b-thead>
            <b-tr>
              <b-th>Nombre completo</b-th>
              <b-th>Matrícula</b-th>
              <b-th>Carrera</b-th>
              <b-th>División académica</b-th>
              <b-th>Nivel</b-th>
              <b-th>Aceptar</b-th>
              <b-th>Rechazar</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr
              v-for="student in students"
              v-bind:key="student.idStudentData"
            >
              <b-td>{{ student.firstName + " " + student.lastName }}</b-td>
              <b-td>{{ student.enrollment }}</b-td>
              <b-td>{{ student.degree }}</b-td>
              <b-td>{{ student.division }}</b-td>
              <b-td>{{ student.level }}</b-td>
              <b-td>
                <b-button size="lg" variant="link" class="mb-2">
                  <b-icon
                    icon="check-circle"
                    variant="success"
                    @click="acceptRequest(student.idStudentData)"
                  ></b-icon>
                </b-button>
              </b-td>
              <b-td>
                <b-button size="lg" variant="link" class="mb-2">
                  <b-icon
                    icon="x-circle"
                    variant="danger"
                    @click="deletetRequest(student.idStudentData)"
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
  name: "ConsultarSolicitudes",
  components: {
    headerAdmin,
  },
  data() {
    return {
      students: [],
    };
  },
  methods: {
    acceptRequest(student) {
      const dataStudents = this;
      Swal.fire({
        title: "¿Desea aceptar la solicitud del estudiante?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, aceptar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          api
            .doPut("/api/students/requests", {
              idStudentData: student,
              status: 1,
            })
            .then(function ({ data }) {
              if (data.status) {
                Swal.fire("Aceptada", data.message, "success");
                dataStudents.students = dataStudents.students.filter(
                  (s) => s.idStudentData != student
                );
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
    deletetRequest(student) {
      const dataStudents = this;
      Swal.fire({
        title: "¿Desea rechazar la solicitud del estudiante?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, rechazar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          api
            .doPut("/api/students/requests", {
              idStudentData: student,
              status: 0,
            })
            .then(function ({ data }) {
              if (data.status) {
                Swal.fire("Rechazada", data.message, "success");
                dataStudents.students = dataStudents.students.filter(
                  (s) => s.idStudentData != student
                );
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
      .doGet("api/students/requests")
      .then((response) => {
        this.students = response.data;
      })
      .catch((error) => {
        if (error) {
          console.log("Error al obtener las solicitudes");
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
