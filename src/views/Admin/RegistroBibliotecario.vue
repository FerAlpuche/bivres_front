<template>
  <div>
    <headerAdmin />
    <b-container>
      <b-row>
        <b-col class="mt-5">
          <b-table-simple responsive stripped hover>
            <b-thead head-variant="light">
              <b-tr>
                <b-th>Nombre</b-th>
                <b-th>Apellido Paterno</b-th>
                <b-th>Apellido Materno</b-th>
                <b-th>Carrera</b-th>
                <b-th>Grado</b-th>
                <b-th>Grupo</b-th>
                <b-th>Acción</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>
                  <b-button size="lg" variant="link" class="mb-2">
                    <b-icon icon="x-circle" variant="danger"></b-icon>
                  </b-button>
                </b-td>
              </b-tr>
              <b-tr>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>
                  <b-button size="lg" variant="link" class="mb-2">
                    <b-icon icon="x-circle" variant="danger"></b-icon>
                  </b-button>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <div>
            <b-button
              variant="primary"
              id="show-btn"
              @click="$bvModal.show('bv-modal-example')"
              >Registrar bibliotecario</b-button
            >
          </div>
        </b-col>
      </b-row>
      <b-modal
        title="Registrar bibliotecario"
        hide-header-close
        size="lg"
        centered
        id="bv-modal-example"
        hide-footer
      >
        <div class="d-block text-center">
          <b-card
            border-variant="info"
            no-body
            class="overflow-hidden mx-auto"
            style="max-width: 80%; background: #ffff; border-radius: 10px"
          >
            <b-row>
              <b-col md="12">
                <b-card-body body-text-variant="black" title="">
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
                            size="sm"
                            class="mt-3"
                            id="input-1"
                            type="text"
                            placeholder="Ej. José"
                            required
                            v-model="firstName"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-2"
                          label="Primer Apellido(s)"
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
                            v-model="lastName"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-3"
                          label="Correo Electrónico"
                          label-for="input-3"
                        >
                          <b-form-input
                            autocomplete="off"
                            size="sm"
                            class="mt-3"
                            id="input-3"
                            type="email"
                            placeholder="Ej. jose.perez@utez.edu.mx"
                            required
                            v-model="email"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          class="mt-3"
                          id="input-group-4"
                          label="Contraseña"
                          label-for="input-4"
                        >
                          <b-form-input
                            autocomplete="off"
                            size="sm"
                            class="mt-3"
                            id="input-4"
                            type="password"
                            placeholder="*********"
                            required
                            v-model="password"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>
                  <div class="mx-auto">
                    <b-row>
                      <b-col cols="6">
                        <b-button
                          pill
                          variant="danger"
                          class="mt-5 w-50"
                          block
                          @click="$bvModal.hide('bv-modal-example')"
                          >Cancelar</b-button
                        >
                      </b-col>
                      <b-col cols="6">
                        <b-button
                          pill
                          class="mt-5 w-50"
                          variant="success outline"
                          @click="registerLibrarian()"
                        >
                          Registrar

                          <b-icon
                            class="float-right"
                            icon="person-plus"
                          ></b-icon>
                        </b-button>
                      </b-col>
                    </b-row>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </b-modal>
    </b-container>
    <fondo />
  </div>
</template>
<!--

 -->

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import fondo from "../../components/Fondo";
import headerAdmin from "../../components/HeaderAdmin";
import api from "../../util/api";

Vue.use(VueRouter);
export default {
  name: "RegistroBibliotecario",
  data() {
    return {
      librarian: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  components: {
    fondo,
    headerAdmin,
  },
  methods: {
    registerLibrarian() {
      api
        .doPost("/api/users", {
          email: this.librarian.email,
          password: this.librarian.password,
          firstName: this.librarian.firstName,
          lastName: this.librarian.lastName,
        })
        .then(
          (this.librarian.firstName = ""),
          (this.librarian.lastName = ""),
          (this.librarian.email = ""),
          (this.librarian.password = "")
        )
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
body {
  height: 100vh;
}
</style>