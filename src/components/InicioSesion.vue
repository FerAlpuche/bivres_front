<template>
  <div>
    <b-container>
      <b-row align-v="center">
        <b-col align-v="center">
          <b-card
            border-variant="info"
            no-body
            class="overflow-hidden mx-auto"
            style="max-width: 80%; background-color: rgba(255, 255, 255, 0.1)"
          >
            <b-row>
              <b-col md="4" class="mt-5">
                <img src="../assets/logo-utez.png" class="rounded-0 w-100" />
              </b-col>
              <b-col md="8">
                <b-card-body body-text-variant="white" title="Inicio de sesión">
                  <b-form align="left" class="mt-4">
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

                    <b-button block class="mt-3" variant="primary"
                      >Iniciar</b-button
                    >
                  </b-form>
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
//import api from "../util/api";

Vue.use(VueRouter);
export default {};
</script>
<style >
body {
  background: linear-gradient(to left, #049475, #013462);
  margin: auto;
  height: 100vh;
}
</style>