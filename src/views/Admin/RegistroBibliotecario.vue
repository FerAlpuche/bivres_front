<template>
  <div>
    <headerAdmin />
    <br />
    <div class="funciones">
      <h3>Registro de bibliotecarios</h3>
    </div>
    <b-container>
      <b-row>
        <b-col class="mt-5">
          <b-table-simple responsive hover>
            <b-thead>
              <b-tr>
                <b-th>#</b-th>
                <b-th>Nombre</b-th>
                <b-th>Apellidos</b-th>
                <b-th>Correo</b-th>
                <b-th>Actualizar</b-th>
                <b-th>Eliminar</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(user, item) in users" :key="user.id">
                <b-td>{{ item + 1 }}</b-td>
                <b-td>{{ user.firstName }}</b-td>
                <b-td>{{ user.lastName }}</b-td>
                <b-td>{{ user.email }}</b-td>
                <b-td>
                  <b-button
                    @click="
                      $bvModal.show('bv-modal');
                      toggleEdit(user.idUser);
                    "
                    size="lg"
                    variant="link"
                    class="mb-2"
                  >
                    <b-icon icon="pencil" variant="primary"></b-icon>
                  </b-button>
                </b-td>
                <b-td>
                  <b-button
                    @click="deleteLibrarian(user.idUser)"
                    size="lg"
                    variant="link"
                    class="mb-2"
                  >
                    <b-icon icon="x-circle" variant="danger"></b-icon>
                  </b-button>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-row cols="6">
            <b-button
              variant="primary"
              id="show-btn"
              v-b-modal.bv-modal-example
            >
              Registrar bibliotecario
              <b-icon class="float-right" icon="person-plus"></b-icon>
            </b-button>
          </b-row>
        </b-col>
      </b-row>

      <!-- MODAL REGISTRO -->
      <b-modal
        title="Registrar bibliotecario"
        hide-header-close
        size="lg"
        centered
        id="bv-modal-example"
        hide-footer
      >
        <div class="d-block text-center">
          <b-row>
            <b-col md="12">
              <b-form align="left">
                <b-row>
                  <b-col cols="12">
                    <b-form-group
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
                        v-model="librarian.firstName"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      class="mt-3"
                      id="input-group-2"
                      label="Apellido(s)"
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
                        v-model="librarian.lastName"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
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
                        v-model="librarian.email"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
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
                        v-model="librarian.password"
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
                      @click="
                        $bvModal.hide('bv-modal-example');
                        registerLibrarian();
                      "
                    >
                      Registrar

                      <b-icon class="float-right" icon="person-plus"></b-icon>
                    </b-button>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-modal>

      <!-- MODAL MODIFICAR -->
      <b-modal
        title="Modificar bibliotecario"
        hide-header-close
        size="lg"
        centered
        id="bv-modal"
        hide-footer
      >
        <div class="d-block text-center">
          <b-row>
            <b-col md="12">
              <b-form align="left">
                <b-row>
                  <b-col cols="12">
                    <b-form-group
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
                        v-model="firstNameEdit"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      class="mt-3"
                      id="input-group-2"
                      label="Apellido(s)"
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
                        v-model="lastNameEdit"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
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
                        v-model="emailEdit"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
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
                        v-model="passwordEdit"
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
                      @click="$bvModal.hide('bv-modal')"
                      >Cancelar</b-button
                    >
                  </b-col>
                  <b-col cols="6">
                    <b-button
                      pill
                      class="mt-5 w-50"
                      variant="success outline"
                      @click="
                        $bvModal.hide('bv-modal');
                        editLibrarian();
                      "
                    >
                      Modificar

                      <b-icon class="float-right" icon="pencil-square"></b-icon>
                    </b-button>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

import headerAdmin from "../../components/HeaderAdmin";
import api from "../../util/api";
import Swal from "sweetalert2";

Vue.use(VueRouter);
export default {
  name: "RegistroBibliotecario",
  data() {
    return {
      users: [],
      firstNameEdit: "",
      lastNameEdit: "",
      emailEdit: "",
      passwordEdit: "",
      librarianEdit: {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      librarian: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  components: {
    headerAdmin,
  },
  beforeMount() {
    this.getUsers();
  },
  methods: {
    toggleEdit(id) {
      api
        .doGet("/api/users/" + id)
        .then((response) => {
          this.librarianEdit = response.data;
          this.librarianEditId = response.data[0].idUser;
          this.firstNameEdit = response.data[0].firstName;
          this.lastNameEdit = response.data[0].lastName;
          this.emailEdit = response.data[0].email;
          this.passwordEdit = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUsers() {
      api
        .doGet("/api/users/librarian/active")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.loading = false));
    },
    registerLibrarian() {
      api
        .doPost("/api/users", {
          email: this.librarian.email,
          password: this.librarian.password,
          firstName: this.librarian.firstName,
          lastName: this.librarian.lastName,
        })
        .then(() => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Bibliotecario registrado con éxito",
            showConfirmButton: false,
            timer: 2500,
          });
          this.getUsers();
          this.librarian.firstName = "";
          this.librarian.lastName = "";
          this.librarian.email = "";
          this.librarian.password = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editLibrarian() {
      this.librarianEdit = {
        id: this.librarianEditId,
        firstName: this.firstNameEdit,
        lastName: this.lastNameEdit,
        email: this.emailEdit,
        password: this.passwordEdit,
      };
      api
        .doPut("/api/users/" + this.librarianEdit.id, this.librarianEdit)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Bibliotecario actualizado con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
          this.getUsers();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteLibrarian(idUser) {
      Swal.fire({
        title: "¿Está seguro de que desea eliminar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          api
            .doPut("/api/users/delete/" + idUser)
            .then(() => {
              Swal.fire(
                "¡Eliminado!",
                "El bibliotecario se eliminó correctamente.",
                "success"
              );
              this.getUsers();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
  },
};
</script>
<style scoped>
body {
  height: 100vh;
}
.funciones {
  color: #0d6efd;
  width: 100%;
  text-align: left;
  margin-left: 5%;
  border-left: 3px solid #0d6efd;
  height: 45px;
}
.funciones > h3 {
  line-height: 50px;
  margin-left: 0.5%;
}
</style>
