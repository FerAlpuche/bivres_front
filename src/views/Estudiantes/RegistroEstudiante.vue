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
                              v-model="student.selected2"
                              :options="divisions"
                              id="input-5"
                              size="sm"
                              class="form-select form-select-sm mt-3"
                            >
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
                              v-model="student.selected1"
                              id="input-4"
                              size="sm"
                              class="form-select form-select-sm mt-3"
                              :options="degrees"
                            >
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
                              v-model="student.selected3"
                              :options="levels"
                              id="input-6"
                              size="sm"
                              class="form-select form-select-sm mt-3"
                            >
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
                            class="mt-3"
                            id="input-group-7"
                            label="Escaneo de Credencial:"
                            label-for="input-2"
                          >
                          <br>
                          <b-form-file 
                          v-model="student.file2" 
                          class="mt-3" 
                          plain
                          id="buttonFile"
                          ></b-form-file>
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
      divisions: [
        { value: null, text: "Selecciona uno" },
        { value: "a", text: "DATIC" },
      ],
      degrees: [
        { value: null, text: "Selecciona uno" },
        { value: "a", text: "DSM" },
      ],
      levels: [
        { value: null, text: "Selecciona uno" },
        { value: "a", text: "TSU" },
      ],
      student: {
        email: "",
        name: "",
        password: "",
        file2: "",
        lastname: "",
        enrollment: "",
      },
    };
  },
  components: {
    headerEstudiante,
  },
  methods: {
    registerStudent() {
      api
        .doPost("/api/users", {
          firstName: this.student.name,
          lastName: this.student.lastName,
          enrollment: this.student.enrollment,
          selected2: this.student.selected2,
          selected1: this.student.selected1,
          selected3: this.student.selected3,
          email: this.student.email,
          password: this.student.password,
          file2: this.student.file2
        })
        .then(() => {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Estudiante registrado con éxito',
            showConfirmButton: false,
            timer: 2500
          })
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
};
</script>

<style scoped>
body {
  height: 100vh;
}
</style>

