<template>
  <div>
    <fondo />
    <b-container>
      <b-row align-v="center">
        <b-col align-v="center">
          <b-row style="margin-bottom: -5%">
            <b-col md="12" class="">
              <img
                height="60%"
                src="../assets/logo-utez.png"
                class="rounded-0"
              />
            </b-col>
          </b-row>
          <b-card
            border-variant="info"
            no-body
            class="overflow-hidden mx-auto"
            style="max-width: 30%; background: #ffff; border-radius: 15px"
          >
            <b-row>
              <b-col md="12">
                <b-card-body body-text-variant="black" title="Inicio de sesión">
                  <b-form align="left" class="mt-5">
                    <b-form-group
                      class="mt-3"
                      id="input-group-1"
                      label="Correo electrónico:"
                      label-for="input-1"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-1"
                        type="email"
                        placeholder="Ingresa tu correo"
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
                      variant="primary"
                    >
                      Ingresar
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
import fondo from "../components/Fondo";
import Vue from "vue";
import VueRouter from "vue-router";
//import api from "../util/api";
Vue.use(VueRouter);
export default {
  components: {
    fondo,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    authenticate() {
      this.$router.push("/registro-bibliotecario");
    },
  },
  mounted() {},
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