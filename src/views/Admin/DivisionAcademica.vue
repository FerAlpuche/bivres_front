<template>
  <div>
    <headerAdmin />
    <br />
    <div class="funciones">
      <h3>Divisiones académicas</h3>
    </div>
    <b-container>
      <b-row>
        <b-col class="mt-5">
          <b-table-simple responsive hover striped>
            <b-thead head-variant="light">
              <b-tr>
                <b-th>#</b-th>
                <b-th>Nombre</b-th>
                <b-th>Acrónimo</b-th>
                <b-th>Estataus</b-th>
                <b-th>Actualizar</b-th>
                <b-th>Eliminar</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(division, item) in divisions" :key="division.id">
                <b-td>{{ item + 1 }}</b-td>
                <b-td>{{ division.name }}</b-td>
                <b-td>{{ division.acronym }}</b-td>
                <b-th v-if="division.status == 1">Activo</b-th>
                <b-th v-else>Desactivado</b-th>
                <b-td>
                  <b-button
                    @click="
                      $bvModal.show('bv-modal');
                      toggleEdit(division.idAcademicDivision);
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
                    @click="deleteDivision(division.idAcademicDivision)"
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
              Registrar división
              <b-icon class="float-right" icon="bookmark-plus"></b-icon>
            </b-button>
          </b-row>
        </b-col>
      </b-row>

      <!-- MODAL REGISTRO -->
      <b-modal
        title="Registrar división académica"
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
                      label="Nombre"
                      label-for="input-1"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-1"
                        type="text"
                        placeholder="Ej. División Acádemica de Mecánica Industrial"
                        required
                        v-model="division.name"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      class="mt-3"
                      id="input-group-2"
                      label="Acrónimo"
                      label-for="input-2"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-2"
                        type="text"
                        placeholder="Ej. DAMI"
                        required
                        v-model="division.acronym"
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
                        registerDivisions();
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

      <b-modal
        title="Modificar división académica"
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
                      label="Nombre"
                      label-for="input-1"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-1"
                        type="text"
                        placeholder="Ej. División Académica de Mantenimiento Industrial"
                        required
                        v-model="nameEdit"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      class="mt-3"
                      id="input-group-2"
                      label="Acrónimo"
                      label-for="input-2"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-2"
                        type="text"
                        placeholder="Ej. DAMI"
                        required
                        v-model="acronymEdit"
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
                        editDivision();
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
  name: "DivisionAcademica",
  data() {
    return {
      divisions: [],
      nameEdit: "",
      acronymEdit: "",
      division: {
        name: "",
        acronym: "",
      },
      divisionEdit: {
        id: 0,
        name: "",
        acronym: "",
      },
    };
  },
  components: {
    headerAdmin,
  },
  beforeMount() {
    this.getDivisions();
  },
  methods: {
    getDivisions() {
      api
        .doGet("/api/division")
        .then((response) => {
          this.divisions = response.data;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => (this.loading = false));
    },
    registerDivisions() {
      api
        .doPost("/api/division", {
          name: this.division.name,
          acronym: this.division.acronym,
        })
        .then(() => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "División registrada con éxito",
            showConfirmButton: false,
            timer: 2500,
          });
          this.getDivisions();
          (this.division.name = ""), (this.division.acronym = "");
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Ocurrió un error!",
            showConfirmButton: false,
            timer: 2500,
          });
        });
    },

    toggleEdit(id) {
      api
        .doGet("/api/division/" + id)
        .then((response) => {
          this.divisionEdit = response.data;
          this.divisionEdit = response.data[0].idAcademicDivision;
          this.nameEdit = response.data[0].name;
          this.acronymEdit = response.data[0].acronym;
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Ocurrió un error al obtener la información!",
            showConfirmButton: false,
            timer: 2500,
          });
        });
    },
    editDivision() {
      this.divisionEdit = {
        id: this.divisionEdit,
        name: this.nameEdit,
        acronym: this.acronymEdit,
      };
      api
        .doPut("/api/division/" + this.divisionEdit.id, this.divisionEdit)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "División académica modificada con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
          this.getDivisions();
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Ocurrió un error!",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },

    deleteDivision(id) {
      Swal.fire({
        title: "¿Está seguro de que desea eliminar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          api
            .doPut("/api/division/delete/" + id)
            .then(() => {
              Swal.fire(
                "¡Eliminado!",
                "La división se eliminó correctamente.",
                "success"
              );
              this.getDivisions();
            })
            .catch((error) => {
              console.log(error);
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Ocurrió un error!",
                showConfirmButton: false,
                timer: 1500,
              });
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
