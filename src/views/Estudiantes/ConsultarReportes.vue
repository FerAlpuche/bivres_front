<template>
    <div>
        <headerEstudiante />
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
                    <b-th>Visualziar</b-th>
                    <b-th>Descargar</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr>
                    <b-td>Cell</b-td>
                    <b-td>Cell</b-td>
                    <b-td>Cell</b-td>
                    <b-td>Cell</b-td>
                    <b-td>Cell</b-td>
                    <b-td>
                        <b-button size="lg" variant="link" class="mb-2">
                        <b-icon icon="file-earmark" variant="primary"></b-icon>
                        </b-button>
                    </b-td>
                    <b-td>
                        <b-button size="lg" variant="link" class="mb-2">
                        <b-icon icon="cloud-download" variant="success"></b-icon>
                        </b-button>
                    </b-td>
                    </b-tr>
                </b-tbody>
                </b-table-simple>
            </div>
            </b-container>
            <br >
            <b-container>
                <b-pagination v-model="currentPage" pills :total-rows="rows" align="right" id="pag"></b-pagination>
            </b-container>   
        <fondo />
    </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import fondo from "../../components/Fondo";
import headerEstudiante from "../../components/HeaderEstudiante";
Vue.use(VueRouter);
export default {
    name: "ConsultarReportes",
    components: {
    fondo,
    headerEstudiante,
  },
    data() {
        return {
        rows: 100,
        currentPage: 1
        }
    }    
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
