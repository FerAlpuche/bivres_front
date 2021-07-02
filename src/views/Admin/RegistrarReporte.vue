<template>
  <div>
    <headerAdmin />
    <b-container>
      <b-row align-v="center">
        <b-col align-v="center">
          <b-card
            no-body
            class="overflow-hidden mx-auto mt-5 shadow"
            style="max-width: 90%; background: #ffff; border-radius: 10px"
          >
            <b-row>
              <b-col md="12">
                <b-card-body
                  body-text-variant="black"
                  title="Registro de reportes"
                >
                  <b-form
                    align="left"
                    class="mt-5"
                    enctype="multipart/form-data"
                    id="id-form"
                  >
                    <b-row>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-1"
                          label="Nombre del proyecto"
                          label-for="input-1"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.name"
                            size="sm"
                            class="mt-3"
                            id="input-1"
                            type="text"
                            placeholder="Ej. Aplicaciones Móviles"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-2"
                          label="Descripción del Proyecto"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.description"
                            size="sm"
                            class="mt-3"
                            id="input-2"
                            type="text"
                            placeholder="Ej. Proyecto..."
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-3"
                          label="Año de Publicación"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.uploadedYear"
                            size="sm"
                            class="mt-3"
                            id="input-3"
                            type="text"
                            placeholder="Ej. 2021"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-4"
                          label="Bibliotecario"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="librarian.username"
                            size="sm"
                            class="mt-3"
                            id="input-4"
                            type="text"
                            disabled
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-5"
                          label="Esudiante"
                          label-for="input-2"
                        >
                          <b-form-select
                            v-model="student"
                            class="form-control mt-3"
                          >
                            <b-form-select-option
                              v-for="s in students"
                              v-bind:key="s.idStudentData"
                              v-bind:value="s"
                              >{{
                                s.firstName + " " + s.lastName
                              }}</b-form-select-option
                            >
                          </b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-6"
                          label="Carrera"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="student.degree"
                            size="sm"
                            class="mt-3"
                            id="input-6"
                            type="text"
                            disabled
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-7"
                          label="División académica"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="student.division"
                            size="sm"
                            class="mt-3"
                            id="input-7"
                            type="text"
                            disabled
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-8"
                          label="Nivel de estudio"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="student.level"
                            size="sm"
                            class="mt-3"
                            id="input-8"
                            type="text"
                            disabled
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-9"
                          label="Periodo Escolar"
                          label-for="input-2"
                        >
                          <b-form-select
                            v-model="form.idInternshipPeriod"
                            class="form-control mt-3"
                          >
                            <b-form-select-option
                              v-for="ip in internshipPeriods"
                              v-bind:key="ip.idInternshipPeriod"
                              v-bind:value="ip.idInternshipPeriod"
                              >{{
                                ip.name + "-" + ip.year
                              }}</b-form-select-option
                            >
                          </b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-10"
                          label="Palabras clave"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.keywords"
                            size="sm"
                            class="mt-3"
                            id="input-10"
                            type="text"
                            placeholder="Ej. TICS, Industrial, Electronica"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="4">
                        <b-form-group label="Archivo PDF:" class="mt-3">
                          <b-form-file
                            v-model="form.file"
                            accept=".pdf"
                            type="file"
                            class="form-control-sm"
                            name="file"
                            id="file"
                            required
                          >
                          </b-form-file>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>
                  <div class="mx-auto">
                    <b-row>
                      <b-col cols="6">
                        <b-button
                          block
                          class="mt-5 w-50"
                          variant="danger"
                          type="button"
                          @click="back()"
                        >
                          Cancelar
                          <b-icon icon="x-circle"></b-icon>
                        </b-button>
                      </b-col>
                      <b-col cols="6">
                        <b-button
                          block
                          class="mt-5 w-50"
                          variant="primary"
                          type="button"
                          @click="register()"
                        >
                          Registrar
                          <b-icon icon="file-earmark-text-fill"></b-icon>
                        </b-button>
                      </b-col>
                    </b-row>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import api from "../../util/api.js";
import headerAdmin from "../../components/HeaderAdmin";
import Swal from "sweetalert2";

Vue.use(VueRouter);
export default {
  name: "RegistrarReporte",
  components: {
    headerAdmin,
  },
  data() {
    return {
      librarian: JSON.parse(localStorage.getItem("user")),
      student: {
        idStudentData: "",
        idDegree: "",
        idAcademicDivision: "",
        idInternshipPeriod: "",
        idLevel: "",
        degree: "",
        division: "",
        level: "",
      },
      students: [],
      internshipPeriods: [],
      form: {
        name: "",
        description: "",
        uploadedYear: "",
        idStudent: "",
        idLibrarian: "",
        idAcademicDivision: "",
        idInternshipPeriod: "",
        idLevel: "",
        idDegree: "",
        keywords: "",
        file: [],
      },
    };
  },
  methods: {
    back() {
      const route = this;
      route.$router.push("/librarian/consultar-reportes");
    },
    register() {
      const route = this;
      let flag = this.form.file.name === undefined;

      if (!flag) {
        this.form.idStudent = this.student.idStudentData;
        this.form.idAcademicDivision = this.student.idAcademicDivision;
        this.form.idLevel = this.student.idLevel;
        this.form.idDegree = this.student.idDegree;
        this.form.idLibrarian = this.librarian.idLibrarian;

        let fieldsForm = new FormData();
        fieldsForm.append("name", this.form.name);
        fieldsForm.append("description", this.form.description);
        fieldsForm.append("uploadedYear", this.form.uploadedYear);
        fieldsForm.append("idLibrarian", this.form.idLibrarian);
        fieldsForm.append("idStudent", this.student.idStudentData);
        fieldsForm.append("idDegree", this.student.idDegree);
        fieldsForm.append(
          "idAcademicDivision",
          this.student.idAcademicDivision
        );
        fieldsForm.append("idLevel", this.student.idLevel);
        fieldsForm.append("idInternshipPeriod", this.form.idInternshipPeriod);
        fieldsForm.append("keywords", this.form.keywords);
        fieldsForm.append("report", this.form.file, this.form.file.name);

        let myHeaders = new Headers();
        myHeaders.append("x-access-token", localStorage.getItem("token"));

        fetch("http://localhost:3000/api/reports/", {
          method: "POST",
          headers: myHeaders,
          body: fieldsForm,
        })
          .then(function (response) {
            if (response.ok) {
              Swal.fire(
                "Registrado",
                "El reporte ha sido registrado satisfactoriamente",
                "success"
              );
              route.$router.push("/librarian/consultar-reportes");
            } else {
              Swal.fire(
                "Error",
                "Lo sentimos, hubo un error al registrar el reporte",
                "error"
              );
            }
          })
          .then(function (res) {
            if (res) {
              Swal.fire(
                "Error",
                "Lo sentimos, hubo un error al registrar el reporte",
                "error"
              );
            }
          });
      } else {
        Swal.fire("Error", "Favor de subir un archivo", "error");
      }
    },
  },
  created() {
    if (localStorage.getItem("firstAccess") == 1) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Bienvenido(a) " + this.librarian.username,
      });
      localStorage.setItem("firstAccess", 0);
    }

    api
      .doGet("api/students/")
      .then((response) => {
        this.students = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .doGet("api/internship/")
      .then((response) => {
        this.internshipPeriods = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
body {
  height: 100vh;
}
</style>

