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
                        <!--<b-th>Eliminar</b-th>-->
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
                            <b-icon icon="pencil-square" variant="warning"
                            @click="updateReport(report.idReport);"></b-icon>
                            </b-button>
                        </b-td>
                        <!--<b-td>
                            <b-button size="lg" variant="link" class="mb-2">
                            <b-icon icon="trash-fill" variant="danger"
                            @click="deleteReport(report.idReport);"></b-icon>
                            </b-button>
                        </b-td>-->
                    </b-tr>
                </b-tbody>
                </b-table-simple>
            </div>

            <!-- MODAL DISPLAY PDF -->
            <b-modal
                title="Visualizar PDF"
                id="bv-modal" 
                size="xl"
                scrollable 
            >
                <div class="d-block text-center">
                    <iframe :src="dir" style="width:100%; height:800px;" frameborder="0"></iframe>
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
            .doPostPDF("api/reports/file/", {
                file: url
            })
            .then((response) => {
                let blob = new Blob([response.data], {type: 'application/pdf'});
                let data = window.URL.createObjectURL(blob);
                this.dir = data;
            })
            .catch((error) => {
                console.log(error);
            });
            
        },
        downloadFile(url){
            api
            .doPostPDF("api/reports/file/", {
                file: url
            })
            .then((response) => {
                let blob = new Blob([response.data], {type: 'application/pdf'});
                let data = window.URL.createObjectURL(blob);
                let link = document.createElement('a');
                link.href = data;
                link.download= url;
                link.click();
            })
            .catch((error) => {
                console.log(error);
            });
        },
        /*deleteReport(report){
            Swal.fire({
                title: '¿Desea eliminar el reporte?',
                text: "No podrá revirtir los cambios",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    api
                    .doPut("api/reports/delete/"+report)
                    .then((response) => {
                        if (response.data) {
                            Swal.fire('Eliminiado', 'El reporte ha sido eliminado satisfactoriamente', 'success')
                            api
                            .doGet("api/reports/")
                            .then((response) => {
                                console.log(response.data)
                                this.reports = response.data
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                        }   
                    })
                    .catch((error) => {
                        if (error) {
                            Swal.fire('Error', 'Lo sentimos, hubo un error al eliminar el reporte', 'error')
                        }
                    });
                }
            })
        }*/
        updateReport(report) {
            this.$router.push({path: "/librarian/modificar-reporte/"+report});
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