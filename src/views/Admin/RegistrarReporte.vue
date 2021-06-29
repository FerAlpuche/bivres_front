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
            style="max-width: 70%; background: #ffff; border-radius: 10px">
            <b-row>
              <b-col md="12">
                <b-card-body
                  body-text-variant="black"
                  title="Registro de Reportes"
                >
                  <b-form align="left" class="mt-5" @submit="onSubmit">
                    <b-row>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-1"
                          label="Nombre del proyecto:"
                          label-for="input-1"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.name"
                            size="sm"
                            class="mt-3"
                            id="input-1"
                            type="text"
                            placeholder="Ej. Aplicaciones Móviles"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-2"
                          label="Descripción del Proyecto:"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.description"
                            size="sm"
                            class="mt-3"
                            id="input-2"
                            type="text"
                            placeholder="Ej. Proyecto..."
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-3"
                          label="Año de Publicación:"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.anio"
                            size="sm"
                            class="mt-3"
                            id="input-3"
                            type="text"
                            placeholder="Ej. 2021"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-2"
                          label="Carrera:"
                          label-for="input-2"
                        >
                        <b-form-select 
                        v-model="selected1" 
                        :options="degrees"
                        size="sm"
                        class="form-select form-select-sm mt-3">
                        </b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-3"
                          label="División Académica:"
                          label-for="input-2"
                        >
                        <b-form-select 
                        v-model="selected2" 
                        :options="divisions"
                        size="sm"
                        class="form-select form-select-sm mt-3">
                        </b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-3"
                          label="Nivel Académico:"
                          label-for="input-2"
                        >
                        <b-form-select 
                        v-model="selected3" 
                        :options="levels"
                        size="sm"
                        class="form-select form-select-sm mt-3">
                        </b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-3"
                          label="Periodo Escolar:"
                          label-for="input-2"
                        >
                          <b-form-input
                            autocomplete="off"
                            v-model="form.periodo"
                            size="sm"
                            class="mt-3"
                            id="input-3"
                            type="text"
                            placeholder="Ej. Mayo - Agosto"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>
                  <div class="mx-auto">
                    <b-button pill class="mt-5 w-50" variant="primary" type="submit">
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
import Swal from 'sweetalert2'

Vue.use(VueRouter);
  export default {
    name: "RegistrarReporte",
    components: {
    fondo,
    headerAdmin,
  },
    data() {
      return {
        selected1: null,
        selected2: null,
        selected3: null,
        divisions: [
          { value: null, text: 'Selecciona uno' },
          { value: 'a', text: 'DATIC' }
        ],
        degrees: [
          { value: null, text: 'Selecciona uno' },
          { value: 'a', text: 'DSM' }
        ],
        levels: [
          { value: null, text: 'Selecciona uno' },
          { value: 'a', text: 'TSU' }
        ],
        form: {
          name: '',
          description: '',
          anio: '',
          periodo:'',
        }
      }
    },
    methods: {
    },
    created() {
      if (localStorage.getItem("firstAccess") == 1) {
        var user = JSON.parse(localStorage.getItem('user'));
        console.log(user)
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: "Bienvenido(a) " + user.username
        })
        localStorage.setItem("firstAccess", 0)
      }
    }
  }
</script>

<style scoped>
body {
  height: 100vh;
}
</style>