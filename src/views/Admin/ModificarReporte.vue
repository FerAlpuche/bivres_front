<template>
  <div>
    <headerAdmin />
    <b-container>
      <b-row align-v="center">
        <b-col align-v="center">
          <b-card
            border-variant="info"
            no-body
            class="overflow-hidden mx-auto mt-5"
            style="max-width: 90%; background: #ffff; border-radius: 10px">
            <b-row>
              <b-col md="12">
                <b-card-body
                  body-text-variant="black"
                  title="Modificar reporte"
                >
                  <b-form align="left" class="mt-5">
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
                            v-model="report.name"
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
                            v-model="report.description"
                            size="sm"
                            class="mt-3"
                            id="input-2"
                            type="text"
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
                            v-model="report.uploadedYear"
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
                            v-model="report.librarian"
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
                            v-model="report.nameStudent"
                            size="sm"
                            class="mt-3"
                            id="input-5"
                            type="text"
                            placeholder="Ingresar nombre del estudiante"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-6"
                          label="División académica"
                        >
                          <b-form-select
                            v-model="report.idAcademicDivision"
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
                          id="input-group-7"
                          label="Carrera"
                        >
                          <b-form-select
                            v-model="report.idDegree"
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
                        >
                          <b-form-select
                            v-model="report.idLevel"
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
                        >
                          <b-form-select 
                          v-model="report.idInternshipPeriod" 
                          class="form-control mt-3"
                          >
                              <b-form-select-option v-for="ip in internshipPeriods" v-bind:key="ip.idInternshipPeriod" v-bind:value="ip.idInternshipPeriod">
                                {{ip.name +"-"+ip.year}}
                              </b-form-select-option>
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
                            v-model="report.keywords"
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
                        <b-form-group
                          label="Reporte en formato PDF"
                          class="mt-3">
                          <b-form-file 
                            v-model="file"
                            accept=".pdf"
                            placeholder="Elija una archivo PDF o suéltelo aquí..."
                            drop-placeholder="Suelte el archivo aquí"
                            class="form-control"
                            name="file"
                            id="file"
                            required>
                          </b-form-file>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>
                  <div class="mx-auto">
                    <b-button pill class="mt-5 w-50" variant="primary" type="button" @click="updateReport(report.idReport)">
                      Modificar
                      <b-icon class="float-right" icon="file-earmark-text-fill"></b-icon>
                    </b-button>
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
import Swal from 'sweetalert2'

Vue.use(VueRouter);
  export default {
    name: "ModificarReporte",
    components: {
    headerAdmin,
  },
    data() {
      return {
        librarian: JSON.parse(localStorage.getItem('user')),
        divisions: [],
        levels: [],
        degrees: [],
        internshipPeriods: [],
        report: {
          idReport: '',
          name: '',
          description: '',
          uploadedYear: '',
          nameStudent: '',
          idLibrarian: 3,
          idAcademicDivision: '',
          idInternshipPeriod: 1,
          idLevel: '',
          idDegree: '',
          keywords: '',
          file: []
        },
        file: []
      }
    },
    methods: {
      updateReport(report){
        const route = this;
        const flag = this.file.name === undefined;

        let fieldsForm = new FormData();
        fieldsForm.append("name", this.report.name)
        fieldsForm.append("description", this.report.description)
        fieldsForm.append("uploadedYear", this.report.uploadedYear)  
        fieldsForm.append("idLibrarian", this.report.idLibrarian)
        fieldsForm.append("nameStudent", this.report.idStudent)
        fieldsForm.append("idDegree", this.report.idDegree)
        fieldsForm.append("idAcademicDivision", this.report.idAcademicDivision)
        fieldsForm.append("idLevel", this.report.idLevel)
        fieldsForm.append("idInternshipPeriod", this.report.idInternshipPeriod)
        fieldsForm.append("keywords", this.report.keywords)
        fieldsForm.append("filename", this.report.file)

        if (!flag) {
          fieldsForm.append("report", this.file, this.file.name);
        }

        let myHeaders = new Headers();
        myHeaders.append("x-access-token", localStorage.getItem("token"));

        fetch(`http://localhost:3000/api/reports/${report}`, {
          method: 'PUT',
          headers: myHeaders,
          body: fieldsForm
        })
        .then(function(response) {
          if (response.ok) {
            Swal.fire('Registrado', 'El reporte ha sido registrado satisfactoriamente', 'success')
            route.$router.push("/librarian/consultar-reportes");
          }else{
            Swal.fire('Error', 'Lo sentimos, hubo un error al registrar el reporte', 'error')
          }
        })
        .then(function(res) {
          if (res) {
            Swal.fire('Error', 'Lo sentimos, hubo un error al registrar el reporte', 'error')
          }
        });
      },
      getSelectDivision() {
        const id = this.report.idAcademicDivision
        api
          .doGet(`api/degree/${id}`)
          .then((response) => {
            this.degrees = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted() {
      const id = this.$route.params.idReport;

      api
        .doGet(`api/reports/${id}`)
        .then((response) => {
          this.report = response.data.length > 0 ? this.report = response.data[0] : this.report = {};
          this.report.keywords = JSON.parse(this.report.keywords).replaceAll('"', '');

          api
            .doGet(`api/degree/${this.report.idAcademicDivision}`)
            .then((response) => {
              this.degrees = response.data;
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });

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
          this.internshipPeriods = response.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
</script>

<style scoped>
body {
  height: 100vh;
}
</style>