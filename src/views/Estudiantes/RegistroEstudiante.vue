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
                            label="Nombre(s)"
                            label-for="input-1"
                          >
                            <b-form-input
                              autocomplete="off"
                              v-model="student.name"
                              size="sm"
                              class="mt-3"
                              id="input-1"
                              type="text"
                              placeholder="Ingresar su nombre(s)"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-2"
                            label="Apellidos"
                            label-for="input-2"
                          >
                            <b-form-input
                              autocomplete="off"
                              v-model="student.lastname"
                              size="sm"
                              class="mt-3"
                              id="input-2"
                              type="text"
                              placeholder="Ingresar sus apellidos"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-3"
                            label="Matrícula"
                            label-for="input-2"
                          >
                            <b-form-input
                              autocomplete="off"
                              v-model="student.enrollment"
                              size="sm"
                              class="mt-3"
                              id="input-3"
                              type="text"
                              placeholder="Ingresar su matrícula"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-5"
                            label="División académica"
                            label-for="input-2"
                          >
                            <b-form-select 
                              v-model="student.academicDivision" 
                              name="divs"
                              size="sm" 
                              class="form-select form-select-sm mt-3"
                              v-on:change="getSelectDivision();">
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
                            label="Carrera"
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
                            label="Nivel académico"
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
                            label="Correo electrónico institucional"
                            label-for="input-2"
                          >
                            <b-form-input
                              autocomplete="off"
                              v-model="student.email"
                              size="sm"
                              class="mt-3"
                              id="input-8"
                              type="email"
                              placeholder="Ingresar su correo electrónico institucional"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group
                            class="mt-3"
                            id="input-group-9"
                            label="Contraseña"
                            label-for="input-2"
                          >
                            <b-form-input
                              autocomplete="off"
                              v-model="student.password"
                              size="sm"
                              class="mt-3"
                              id="input-9"
                              type="password"
                              placeholder="Ingresar una contraseña"
                              required
                            ></b-form-input>
                          </b-form-group>
                          </b-col>
                          <b-col cols="6">
                            <b-form-group label="Credencial de estudiante" class="mt-2">
                              <b-form-file 
                                v-model="student.file"
                                placeholder="Elija una imagen o suéltela aquí..."
                                drop-placeholder="Suelte la imagen aquí..."
                                accept="image/*"
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
                    <b-button pill class="mt-3 w-50" variant="danger" @click="backToLogin();">
                      Cancelar
                      <b-icon class="float-right" icon="x-circle"></b-icon>
                    </b-button>
                    <b-button pill class="mt-3 w-50" variant="primary" @click="registerStudent();">
                      Registrar
                      <b-icon class="float-right" icon="person-plus"></b-icon>
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
        academicDivision: 0,
        level: 0,
        degree: 0,
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
  },
  methods: {
    registerStudent() {
      let flag = this.student.file.name === undefined;

      if (this.student.name.trim() != "" && this.student.lastname.trim() != "" && this.student.enrollment.trim() != "" 
      && this.student.academicDivision != 0 && this.student.degree != 0 && this.student.level != 0 
      && this.student.email.trim() != "" && this.student.password.trim() != "") {

        if (this.isEmail(this.student.email)) {
          if (!flag) {
            const route = this;
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
                  Swal.fire('Registro exitoso', '', 'info')
                  Swal.fire({
                    title: 'Registro exitoso',
                    text: 'Su solicitud se encuentra en validación por parte de los bibliotecarios',
                    icon: 'info',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Aceptar'
                  })
                  route.$router.push("/");
                }else{
                  Swal.fire('Error', 'Lo sentimos, hubo un error al registrar al estudiante', 'error')
                }
              })
              .then(function() {
                if (flag) {
                  Swal.fire({
                    title: 'La imagen de su credencial es obligatoria',
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Aceptar'
                  })
                }
            });
          } else {
            Swal.fire({
              title: 'La imagen de su credencial es obligatoria',
              icon: 'warning',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Aceptar'
            })
          }
        } else {
          Swal.fire({
            title: 'Favor de ingresar un correo electrónico válido',
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
    getSelectDivision () {
      api
        .doGet("/api/degree/"+this.student.academicDivision)
        .then((response) => {
          this.degrees = response.data
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => (this.loading = false));
    },
    getDivisions(){
        api
          .doGet("/api/division")
          .then((response) => {
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
            this.levels = response.data
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => (this.loading = false));
    },
    backToLogin(){
      this.$router.push("/");
    },
    isEmail(email){
      // Regular expression for email search pattern
      var re = /^[^\s@]+@[^\s@]+$/;
      return re.test(email)
    }
  }
};
</script>

<style scoped>
body {
  height: 100vh;
}

.custom-file-label::after {
  content: "Buscar"
}
</style>

