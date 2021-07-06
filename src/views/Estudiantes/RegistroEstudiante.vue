<template>
  <div>
    <headerEstudiante />
    <b-container>
       <b-row align-v="center">
        <b-col align-v="center">
          <b-card
            border-variant="info"
            no-body
            class="overflow-hidden mx-auto mt-5"
            style="max-width: 70%; background: #ffff; border-radius: 10px"
          >
            <b-row>
              <b-col md="12">
                <b-card-body
                  body-text-variant="black"
                  title="Registro de estudiantes"
                >

                    <b-form align="left">
                      <b-row>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-1"
                            label="Nombre:"
                            label-for="input-1"
                          >
                            <b-form-input
                              autocomplete="off"
                              v-model="student.name"
                              size="sm"
                              class="mt-3"
                              id="input-1"
                              type="text"
                              placeholder="Ej. José"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-2"
                            label="Apellidos:"
                            label-for="input-2"
                          >
                            <b-form-input
                              autocomplete="off"
                              v-model="student.lastname"
                              size="sm"
                              class="mt-3"
                              id="input-2"
                              type="text"
                              placeholder="Ej. Ramírez Ramírez"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-3"
                            label="Matricula:"
                            label-for="input-2"
                          >
                            <b-form-input
                              autocomplete="off"
                              v-model="student.enrollment"
                              size="sm"
                              class="mt-3"
                              id="input-3"
                              type="text"
                              placeholder="Ej. 20183TI000"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-5"
                            label="División Académica:"
                            label-for="input-2"
                          >
                            <b-form-select 
                            v-model="student.academicDivision" 
                            name="divs"
                            size="sm" 
                            class="form-select form-select-sm mt-3">
                              <option v-for="div in divisions" 
                              v-bind:key="div.idAcademicDivision"
                              v-bind:value="div.idAcademicDivision">
                              {{div.name}}
                              </option>
                            </b-form-select>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-4"
                            label="Carrera:"
                            label-for="input-2"
                          >
                            <b-select
                              v-model="student.degree"
                              id="input-4"
                              size="sm"
                              class="form-select form-select-sm mt-3">
                              <option v-for="deg in degrees" 
                              v-bind:key="deg.idDegree"
                              v-bind:value="deg.idDegree">
                              {{deg.name}}
                              </option>
                            </b-select>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-6"
                            label="Nivel Académico:"
                            label-for="input-2"
                          >
                            <b-form-select
                              v-model="student.level"
                              size="sm"
                              class="form-select form-select-sm mt-3">
                              <option v-for="lev in levels" 
                              v-bind:key="lev.idLevel"
                              v-bind:value="lev.idLevel">
                              {{lev.name}}
                              </option>
                            </b-form-select>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-8"
                            label="Correo Electrónico Institucional:"
                            label-for="input-2"
                          >
                            <b-form-input
                              autocomplete="off"
                              v-model="student.email"
                              size="sm"
                              class="mt-3"
                              id="input-8"
                              type="email"
                              placeholder="Ej. 20183TI000@utez.edu.mx"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-9"
                            label="Contraseña:"
                            label-for="input-2"
                          >
                            <b-form-input
                              autocomplete="off"
                              v-model="student.password"
                              size="sm"
                              class="mt-3"
                              id="input-9"
                              type="password"
                              placeholder="Ej. 1234"
                              required
                            ></b-form-input>
                          </b-form-group>
                          </b-col>
                          <b-col cols="6">
                        <b-form-group 
                        label="Credencial:" 
                        label-cols-sm="4"
                        class="mt-3">
                          <b-form-file 
                            v-model="student.file"
                            accept=".jpg"
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
                    <b-button pill class="mt-3 w-50" variant="primary" @click="registerStudent();">
                      Registrar
                      <b-icon class="float-right" icon="person-plus"></b-icon>
                    </b-button>
                    <b-button pill class="mt-3 w-50" variant="danger">
                      Cancelar
                      <b-icon class="float-right" icon="x-circle"></b-icon>
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
import headerEstudiante from "../../components/HeaderEstudiante";
import api from "../../util/api";
import Swal from 'sweetalert2'

Vue.use(VueRouter);

export default {
  name: "RegistroEstudiante",
  data() {
    return {
      divisions: [],
      levels: [],
      degrees: [],
      student: {
        email: "",
        name: "",
        password: "",
        lastname: "",
        enrollment: "",
        academicDivision: "",
        level: "",
        degree: "",
        file: [],
      },
    };
  },
  components: {
    headerEstudiante,
  },
    beforeMount() {
    this.getDivisions();
    this.getLevel();
    this.getDegree();
  },
  methods: {
    registerStudent() {
      const route = this;
      let flag = this.student.file.name === undefined;

      if(!flag){
        let fieldsForm = new FormData();

        fieldsForm.append("firstName", this.student.name)
        fieldsForm.append("lastName", this.student.lastname)
        fieldsForm.append("enrollment", this.student.enrollment)
        fieldsForm.append("idAcademicDivision", this.student.academicDivision)
        fieldsForm.append("idDegree", this.student.degree)
        fieldsForm.append("idLevel", this.student.level)
        fieldsForm.append("email", this.student.email)
        fieldsForm.append("password", this.student.password)
        fieldsForm.append("studentCredential", this.student.file, this.student.file.name)
        
        fetch('http://localhost:3000/api/students/', {
            method: 'POST',
            body: fieldsForm
          })
          .then(function(response) {
            if (response.ok) {
              Swal.fire('Registro exitoso', 'Su solicitud ha sido enviada, favor de esperar su validación', 'info')
              route.$router.push("/");
            }else{
              Swal.fire('Error', 'Lo sentimos, hubo un error al registrar al estudiante', 'error')
            }
          })
          .then(function() {
            if (flag) {
              Swal.fire('Error', 'Favor de subir un archivo', 'error')
            }
        });
      } else {
        Swal.fire('Error', 'Favor de subir un archivo', 'error')
      }
    },
  getDivisions(){
      api
        .doGet("/api/division")
        .then((response) => {
          console.log(response);
          this.divisions = response.data
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => (this.loading = false));
    },
  getLevel(){
      api
        .doGet("/api/level")
        .then((response) => {
          console.log(response);
          this.levels = response.data
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => (this.loading = false));
    },
  getDegree(){
      api
        .doGet("/api/degree")
        .then((response) => {
          console.log(response);
          this.degrees = response.data
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => (this.loading = false));
    },
  }
};
</script>

<style scoped>
body {
  height: 100vh;
}
</style>

