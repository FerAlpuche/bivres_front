<template>
    <div>
        <headerAdmin />
         <br />
            <div class="funciones">
            <h3>Consulta de Reportes de Estadia</h3>
            </div>
            <br />
            <b-container>
            <div class="mt-5">
                <b-table-simple responsive stripped hover>
                <b-thead head-variant="light" id="my-table">
                    <b-tr>
                        <b-th>Titulo del Proyecto</b-th>
                        <b-th>División Académica</b-th>
                        <b-th>Carrera</b-th>
                        <b-th>Nivel Académico</b-th>
                        <b-th>Año de Publicación</b-th>
                        <b-th>Visualizar</b-th>
                        <b-th>Descargar</b-th>
                        <b-th>Modificar</b-th>
                        <b-th>Eliminar</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="report in reports" v-bind:key="report.idReport">
                        <b-td>{{report.name}}</b-td>
                        <b-td>{{report.idAcademicDivision}}</b-td>
                        <b-td>{{report.idDegree}}</b-td>
                        <b-td>{{report.idLevel}}</b-td>
                        <b-td>{{report.uploadedYear}}</b-td>
                        <b-td>
                            <b-button size="lg" variant="link" class="mb-2">
                                <b-icon icon="file-earmark" variant="primary" 
                                @click="
                                $bvModal.show('bv-modal');
                                getFile(report.file);"></b-icon>
                            </b-button>
                        </b-td>
                        <b-td>
                            <b-button size="lg" variant="link" class="mb-2">
                            <b-icon icon="cloud-download" variant="success"
                            @click="downloadFile(report.file);"></b-icon>
                            </b-button>
                        </b-td>
                        <b-td>
                            <b-button size="lg" variant="link" class="mb-2">
                            <b-icon icon="pencil-square" variant="warning"></b-icon>
                            </b-button>
                        </b-td>
                        <b-td>
                            <b-button size="lg" variant="link" class="mb-2">
                            <b-icon icon="trash-fill" variant="danger"></b-icon>
                            </b-button>
                        </b-td>
                    </b-tr>
                </b-tbody>
                </b-table-simple>
            </div>

            <!-- MODAL DISPLAY PDF -->
            <b-modal
                title="Visualizar PDF"
                id="bv-modal" 
                size="lg"
                scrollable 
            >
                <div class="d-block text-center">
                    <embed :src="dir" width="700" height="500" 
                        type="application/pdf">
                </div>
            </b-modal>
            </b-container>
            <br >
            <b-container>
                <b-pagination v-model="currentPage" pills :total-rows="rows" align="right" id="pag"></b-pagination>
            </b-container>   
    </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import api from "../../util/api.js";
import headerAdmin from "../../components/HeaderAdmin.vue";
import Swal from 'sweetalert2'

Vue.use(VueRouter);

export default {
    name: "ConsultarReportes",
    components: {
        headerAdmin,
    },
    data() {
        return {
            reports: [],
            dir: "",
            rows: 100,
            currentPage: 1
        }
    },
    methods: {
        getFile(url){
            api
            .doPost("api/reports/file", {
              file: url
            })
            .then((response) => {
                this.dir = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },
        downloadFile(url){
            api
            .doPost("api/reports/file", {
              file: url
            })
            .then((response) => {
                let blob = new Blob([response.data], {type: 'application/pdf'});
                let data = window.URL.createObjectURL(blob);
                let link = document.createElement('a');
                link.href = data;
                link.download="file.pdf";
                link.click();
            })
            .catch((error) => {
                console.log(error);
            });
        }
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
    },
    mounted() {
      api
        .doGet("api/reports/")
        .then((response) => {
          console.log(response.data)
          this.reports = response.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
}
</script>

<style scoped>
body {
  height: 100vh;
}
/*009475 color verde*/

.funciones {
  color: #002E60;
  width: 100%;
  text-align: left;
  margin-left: 5%;
  border-left: 3px solid #002E60;
  height: 45px;
}
.funciones > h3 {
  line-height: 50px;
  margin-left: 0.5%;
}

</style>