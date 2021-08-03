<template>
  <div>
    <headerAdmin />
    <b-container>
      <b-row align-v="center">
        <b-col align-v="center">
          <b-card
            no-body
            class="overflow-hidden mx-auto mt-5 mb-3 shadow"
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
                            placeholder="Ingresar el nombre del proyecto"
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
                          <b-form-textarea
                            autocomplete="off"
                            v-model="form.description"
                            size="sm"
                            class="mt-3"
                            id="input-2"
                            placeholder="Ingresar la descripción del proyecto"
                            rows="3"
                            max-rows="6"
                            required
                          ></b-form-textarea>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-3"
                          label="Año de Publicación"
                          label-for="input-3"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.uploadedYear"
                            size="sm"
                            class="mt-3"
                            id="input-3"
                            type="text"
                            placeholder="Ingresar el año de publicación"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-4"
                          label="Bibliotecario"
                          label-for="input-4"
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
                          label-for="input-5"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.nameStudent"
                            size="sm"
                            class="mt-3"
                            id="input-5"
                            type="text"
                            placeholder="Ingresar nombre del estudiante"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-7"
                          label="División académica"
                          label-for="input-7"
                        >
                          <b-form-select
                            v-model="form.idAcademicDivision"
                            class="form-control mt-3"
                            v-on:change="getSelectDivision();"
                          >
                            <b-form-select-option
                              v-for="ac in divisions"
                              v-bind:key="ac.idAcademicDivision"
                              v-bind:value="ac.idAcademicDivision"
                              >{{
                                ac.name
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
                          label-for="input-6"
                        >
                          <b-form-select
                            v-model="form.idDegree"
                            class="form-control mt-3"
                          >
                            <b-form-select-option
                              v-for="dg in degrees"
                              v-bind:key="dg.idDegree"
                              v-bind:value="dg.idDegree"
                              >{{
                                dg.name
                              }}</b-form-select-option
                            >
                          </b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-8"
                          label="Nivel de estudio"
                          label-for="input-8"
                        >
                          <b-form-select
                            v-model="form.idLevel"
                            class="form-control mt-3"
                          >
                            <b-form-select-option
                              v-for="lv in levels"
                              v-bind:key="lv.idLevel"
                              v-bind:value="lv.idLevel"
                              >{{
                                lv.name
                              }}</b-form-select-option
                            >
                          </b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-9"
                          label="Periodo escolar"
                          label-for="input-9"
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
                          label-for="input-10"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.keywords"
                            size="sm"
                            class="mt-3"
                            id="input-10"
                            type="text"
                            placeholder="Ingresar las palabras claves del reporte"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group label="Reporte en formato PDF" class="mt-3">
                          <b-form-file
                            v-model="form.file"
                            accept=".pdf"
                            placeholder="Elija una archivo PDF o suéltelo aquí..."
                            drop-placeholder="Suelte el archivo aquí..."
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
                          class="mt-5 w-100"
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
                          class="mt-5 w-100"
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
      divisions: [],
      levels: [],
      degrees: [],
      internshipPeriods: [],
      form: {
        name: "",
        description: "",
        uploadedYear: "",
        nameStudent: "",
        idLibrarian: 0,
        idAcademicDivision: 0,
        idInternshipPeriod: 0,
        idLevel: 0,
        idDegree: 0,
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
    getSelectDivision() {
      const id = this.form.idAcademicDivision;
      api
        .doGet(`api/degree/${id}`)
        .then((response) => {
          this.degrees = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    register() {
      const route = this;
      let flag = this.form.file.name === undefined;
      if (this.form.name != "" && this.form.description != "" && this.form.uploadedYear != "" && this.librarian.idLibrarian != 0 
      && this.form.nameStudent != "" && this.form.idDegree != 0 && this.form.idAcademicDivision != 0 && this.form.idLevel != 0 
      && this.form.idInternshipPeriod != 0 && this.form.keywords != "") {

        if (!flag) {

          let fieldsForm = new FormData();
          fieldsForm.append("name", this.form.name);
          fieldsForm.append("description", this.form.description);
          fieldsForm.append("uploadedYear", this.form.uploadedYear);
          fieldsForm.append("idLibrarian", this.librarian.idLibrarian);
          fieldsForm.append("nameStudent", this.form.nameStudent);
          fieldsForm.append("idDegree", this.form.idDegree);
          fieldsForm.append("idAcademicDivision", this.form.idAcademicDivision);
          fieldsForm.append("idLevel", this.form.idLevel);
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
          Swal.fire({
            title: 'El archivo PDF del reporte es obligatorio',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
          })
        }
      } else {
        Swal.fire({
          title: 'Todos los campos son obligatorios',
          icon: 'warning',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar'
        })
      }
    },
  },
  mounted() {
    api
      .doGet("api/division/")
      .then((response) => {
        this.divisions = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .doGet("api/level/")
      .then((response) => {
        this.levels = response.data;
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

