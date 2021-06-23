<template>
  <div>
    <b-container>
      <b-row align-v="center">
        <b-col align-v="center">
          <div>
              <img
                style="width:20%; margin: -2% 0% 4% 0%;"
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
                      class="mt-3"
                      id="input-group-1"
                      label="Matrícula:"
                      label-for="input-1"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-1"
                        type="text"
                        placeholder="Ingresa tu matrícula"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      class="mt-3"
                      id="input-group-2"
                      label="Contraseña:"
                      label-for="input-2"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-2"
                        type="password"
                        placeholder="***********"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-form>
                  <div class="mx-auto">
                    <b-button
                      @click="authenticate()"
                      pill
                      class="mt-5 w-50"
                      style="background-color: #009475;"
                    >
                      Ingresar
                    </b-button>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
            <b-alert style="margin:0 2% 0 2%; background-color: #002e60;" class="text-white" show>
              ¿Eres bibliotecario? Da click <a class="text-white" href="/"> aquí </a>
            </b-alert>
            <p></p>
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
        email: "mail14@utez.edu.mx",
        password: "root"
      },
    };
  },
  methods: {
    authenticate() {
      this.$router.push("/consultar-reportes");
    },
  },
  mounted() {},
  created() {
    axios.post('http://localhost:3000/api/auth/signin', {
      email: "mail14@utez.edu.mx",
      password: "root"
    })
    .then(function ({data}) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
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