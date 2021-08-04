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
                <b-th>Apellido(s)</b-th>
                <b-th>Correo electrónico</b-th>
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
                        placeholder="Ingresar su nombre(s)"
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
                        placeholder="Ingresar su apellido(s)"
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
                        placeholder="Ingresar su correo electrónico"
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
                        placeholder="Ingresar su contraseña"
                        required
                        v-model="librarian.password"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
              <div class="mx-auto row">
                <div class="col-6">
                  <b-button
                    pill
                    variant="danger"
                    class="mt-5 w-50"
                    block
                    @click="$bvModal.hide('bv-modal-example')"
                    >Cancelar</b-button
                  >
                </div>
                <div class="col-6">
                  <b-button
                    pill
                    class="mt-5 w-50"
                    variant="success outline"
                    @click="
                      $bvModal.hide('bv-modal-example');
                      registerLibrarian();
                    "
                  >Registrar
                  <b-icon class="float-right" icon="person-plus"></b-icon>
                  </b-button>
                </div>
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
                        placeholder="Ingresar su nombre(s)"
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
                        placeholder="Ingresar su apellido(s)"
                        required
                        v-model="lastNameEdit"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      class="mt-3"
                      id="input-group-3"
                      label="Correo electrónico"
                      label-for="input-3"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-3"
                        type="email"
                        placeholder="Ingresar su correo electrónico"
                        required
                        v-model="emailEdit"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" v-if="!isNewPassword">
                    <b-button size="md" variant="outline-warning" @click="editPassword">
                      <b-icon
                        variant="waring"
                        icon="key"
                        aria-hidden="true"
                      ></b-icon> Cambiar contraseña
                    </b-button>
                  </b-col>
                  <b-col cols="12" v-else>
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
                        placeholder="Ingresar su contraseña"
                        required
                        v-model="passwordEdit"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
              <div class="mx-auto row">
                <div class="col-6">
                  <b-button
                    pill
                    variant="danger"
                    class="mt-5 w-50"
                    block
                    @click="$bvModal.hide('bv-modal')"
                    >Cancelar</b-button
                  >
                </div>
                <div class="col-6">
                  <b-button
                    pill
                    class="mt-5 w-50"
                    variant="success outline"
                    @click="
                      $bvModal.hide('bv-modal');
                      editLibrarian();
                    "
                  > Modificar
                    <b-icon class="float-right" icon="pencil-square"></b-icon>
                  </b-button>
                </div>
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
      librarianEditId: "",
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
      isNewPassword: false,
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
        .doGet(`/api/users/${id}`)
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
          this.users = response.data.filter(i => i.email != JSON.parse(localStorage.getItem('user')).username);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.loading = false));
    },
    registerLibrarian() {
      if (this.librarian.email != "" && this.librarian.password != "" 
        && this.librarian.firstName != "" && this.librarian.lastName != "") {
          if (this.isEmail(this.librarian.email)) {
            api
              .doPost("/api/users", {
                email: this.librarian.email,
                password: this.librarian.password,
                firstName: this.librarian.firstName,
                lastName: this.librarian.lastName,
              })
              .then(() => {
                Swal.fire(
                  "Registrado",
                  "El bibliotecario ha sido registrado satisfactoriamente",
                  "success"
                );
                this.getUsers();
                this.librarian.firstName = "";
                this.librarian.lastName = "";
                this.librarian.email = "";
                this.librarian.password = "";
              })
              .catch((error) => {
                console.log(error);
              });
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
    editLibrarian() {
      if (this.librarianEditId != "" && this.firstNameEdit != "" 
        && this.lastNameEdit != "" && this.emailEdit != "") {
          if (this.isEmail(this.emailEdit)) {
            this.librarianEdit = {
              id: this.librarianEditId,
              firstName: this.firstNameEdit,
              lastName: this.lastNameEdit,
              email: this.emailEdit,
            };
            if (this.isNewPassword) {
              this.librarianEdit.password = this.passwordEdit;
            }
            api
              .doPut(`/api/users/${this.librarianEdit.id}`, this.librarianEdit)
              .then(() => {
                Swal.fire(
                  "Modificado",
                  "El bibliotecario ha sido modificado satisfactoriamente",
                  "success"
                );
                this.getUsers();
              })
              .catch((error) => {
                console.log(error);
              });
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
    editPassword(){
      this.isNewPassword = !this.isNewPassword;
    },
    deleteLibrarian(idUser) {
      Swal.fire({
        title: "¿Está seguro de que desea eliminar al bibliotecario?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          api
            .doPut(`/api/users/delete/${idUser}`)
            .then(() => {
              Swal.fire(
                "Eliminado",
                "El reporte ha sido eliminado satisfactoriamente",
                "error"
              );
              this.getUsers();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
    isEmail(email){
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
.funciones {
  width: 100%;
  text-align: left;
  margin-left: 5%;
  border-left: 3px solid;
  height: 45px;
}
.funciones > h3 {
  line-height: 50px;
  margin-left: 0.5%;
}
</style>
