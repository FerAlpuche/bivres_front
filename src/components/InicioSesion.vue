<template>
  <div>
    <b-container>
      <b-row align-v="center">
        <b-col align-v="center">
          <div>
              <img
                style="width:20%; margin: 0 0 5% 0;"
                src="../assets/logo-utez.png"
                class="rounded-0"
              />
          </div>
          <b-card
            no-body
            class="overflow-hidden mx-auto"
            style="max-width: 30%; background: #ffff; border-radius: 15px; box-shadow: 2px 2px 2px 2px #dfd6d8;"
          >
            <b-row>
              <b-col md="12">
                <b-card-body body-text-variant="black" class="mt-2" title="Inicio de sesión">
                  <b-form align="left" class="mt-5">
                    <b-form-group
                      class="mt-3 fw-bold"
                      id="input-group-1"
                      label="Matrícula"
                      label-for="input-1"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-1"
                        type="text"
                        placeholder="Ingresa tu matrícula"
                        v-model="user.matricula"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      class="mt-3 fw-bold"
                      id="input-group-2"
                      label="Contraseña"
                      label-for="input-2"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-2"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        v-model="user.password"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-form>
                  <div class="mx-auto">
                    <b-button
                      @click="authenticate()"
                      class="mt-4 w-100"
                      style="background-color: #009475;"
                    >
                      Ingresar
                    </b-button>
                  </div>
                  <div class="mx-auto">
                    <b-button
                      class="mt-2 w-100"
                      style="background-color: #002e60;"
                    >
                      Soy bibliotecario
                    </b-button>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
            <template #footer>
              <p>¿No te has registrado? Haz click <a href="">aquí</a></p>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
const axios = require('axios');
//import api from "../util/api";
Vue.use(VueRouter);
export default {
  components: {
  },
  data() {
    return {
      user: {
        matricula: "",
        password: ""
      },
    };
  },
  methods: {
    authenticate() {
      const route = this;
      axios.post('http://localhost:3000/api/auth/signin', {
        email: this.user.matricula,
        password: this.user.password
      })
      .then(function ({data}) {
        console.log(data);
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("role", "student");
        //route.$router.push("/librarian/registrar-reporte");
        route.$router.push("/student/consultar-reportes");
        /*if (false) { //data.role
          route.$router.push("/librarian/registrar-reporte");
        } else {
          route.$router.push("/student/consultar-reportes");
        }*/
      })
      .catch(function (error) {
        if (error) {
          console.log("EFE")
        }
      });
    },
  },
  mounted() {},
  created() {},
};
</script>

<style scoped>
body {
  margin: auto;
}
p {
  font-size: 80%;
}
</style>