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
            style="max-width: 70%; background: #ffff; border-radius: 10px"
          >
            <b-row>
              <b-col md="12">
                <b-card-body
                  body-text-variant="black"
                  title="Registrar nuevo bibliotecario"
                >
                  <b-form align="left" class="mt-5">
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
                          label="Primer Apellido:"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            size="sm"
                            class="mt-3"
                            id="input-2"
                            type="text"
                            placeholder="Ej. Ramírez"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-3"
                          label="Segundo Apellido:"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            size="sm"
                            class="mt-3"
                            id="input-3"
                            type="text"
                            placeholder="Ej. Ramírez"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-2"
                          label="Dirección:"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            size="sm"
                            class="mt-3"
                            id="input-2"
                            type="text"
                            placeholder="Ej. Av. Emiliano Zapata No. 16 62768"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>
                  <div class="mx-auto">
                    <b-button pill class="mt-5 w-50" variant="primary">
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
    <fondo />
  </div>
</template>


<script>
import Vue from "vue";
import VueRouter from "vue-router";
import fondo from "../../components/Fondo";
import headerAdmin from "../../components/HeaderAdmin";
//import api from "../../util/api";

Vue.use(VueRouter);
export default {
  name: "RegistroBibliotecario",
  components: {
    fondo,
    headerAdmin,
  },
};
</script>
<style scoped>
body {
  height: 100vh;
}
</style>