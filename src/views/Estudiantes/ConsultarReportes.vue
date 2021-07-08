<template>
  <div>
    <headerEstudiante />
    <br />
    <div class="funciones">
      <h3>Consulta de reportes de estadía</h3>
    </div>
    <br />
    <b-container>
      <div class="mt-5 mb-5">
        <b-row>
          <b-col cols="3">
            <h5 align="left">Título</h5>
            <b-form-input
              type="text"
              placeholder="Ingrese el título del reporte"
              v-model="selectTitle"
            ></b-form-input>
          </b-col>
          <b-col cols="3">
            <h5 align="left">División Académica</h5>
            <b-form-select 
              class="form-select"
              v-model="selectDivision"
              v-on:change="getSelectDivision();">
              <b-form-select-option
                v-for="division in divisions"
                :key="division.idAcademicDivision"
                :value="division.idAcademicDivision"
              >
                {{ division.name }}
              </b-form-select-option>
            </b-form-select>
          </b-col>
          <b-col cols="3">
            <h5 align="left">Carrera</h5>
            <b-form-select class="form-select" v-model="selectDegree">
              <b-form-select-option v-for="career in careers" :key="career.idDegree" :value="career.acronym">
                {{ career.name }}
              </b-form-select-option>
            </b-form-select>
          </b-col>
          <b-col cols="3">
            <h5 align="left">Año de publicación</h5>
            <b-form-datepicker minimum-view="year" v-model="selectYear"></b-form-datepicker>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col cols="1">
            <b-button block variant="primary" @click="searchReport();">
              <b-icon
                icon="search"
                variant="light"
              ></b-icon>
            </b-button>
          </b-col>
          <b-col cols="1" v-if="clean">
            <b-button block variant="warning" @click="cleanFilters();">
              <b-icon
                icon="backspace-fill"
                variant="dark"
              ></b-icon>
            </b-button>
          </b-col>
        </b-row>
      </div>
      <div class="mt-5">
        <b-table-simple fixed responsive hover>
          <b-thead id="my-table">
            <b-tr>
              <b-th>#</b-th>
              <b-th>Titulo del Proyecto</b-th>
              <b-th>División Académica</b-th>
              <b-th>Carrera</b-th>
              <b-th>Nivel Académico</b-th>
              <b-th>Año de Publicación</b-th>
              <b-th>Visualizar</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="(report, item) in reports" :key="report.id">
              <b-td>{{ item + 1 }}</b-td>
              <b-td>{{ report.reportName }}</b-td>
              <b-td>{{ report.divisionAcronym }}</b-td>
              <b-td>{{ report.degreeName }}</b-td>
              <b-td>{{ report.levelAcronym }}</b-td>
              <b-td>{{ report.uploadedYear }}</b-td>
              <b-td>
                <b-button size="lg" variant="link" class="mb-2">
                  <b-icon
                    icon="file-earmark"
                    variant="primary"
                    @click="
                      $bvModal.show('bv-modal');
                      getFile(report.file);
                    "
                  ></b-icon>
                </b-button>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-container>
    <br />

    <b-modal
      centered
      title="Visualizar PDF"
      id="bv-modal"
      size="lg"
      scrollable
      hide-header-close
      ok-only
    >
      <div class="d-block text-center">
        <iframe
          :src="dir"
          style="width: 100%; height: 800px"
          frameborder="0"
        ></iframe>
      </div>
    </b-modal>

    <b-container>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        align="right"
        id="pag"
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import headerEstudiante from "../../components/HeaderEstudiante";
import Swal from "sweetalert2";
import api from "../../util/api";

Vue.use(VueRouter);

export default {
  name: "ConsultarReportes",
  components: {
    headerEstudiante,
  },
  data() {
    return {
      dir: "",
      rows: 100,
      currentPage: 1,
      selectTitle: "",
      selectDivision: "",
      selectDegree: "",
      selectYear: "",
      clean: false,
      reports: [],
      reportsCopy: [],
      divisions: [],
      careers: [],
    };
  },
  created() {
    if (localStorage.getItem("firstAccess") == 1) {
      var user = JSON.parse(localStorage.getItem("user"));
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Bienvenido(a) " + user.username,
      });

      localStorage.setItem("firstAccess", 0);
    }
  },
  beforeMount() {
    this.getReports();
    this.getDivisions();
  },
  methods: {
    getReports() {
      api
        .doGet("/api/reports")
        .then((response) => {
          this.reports = response.data;
          this.reportsCopy = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.loading = false));
    },
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
    getFile(url) {
      api
        .doPostPDF("api/reports/file/", {
          file: url,
        })
        .then((response) => {
          let blob = new Blob([response.data], { type: "application/pdf" });
          let data = window.URL.createObjectURL(blob);
          this.dir = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    downloadFile(url) {
      api
        .doPostPDF("api/reports/file/", {
          file: url,
        })
        .then((response) => {
          let blob = new Blob([response.data], { type: "application/pdf" });
          let data = window.URL.createObjectURL(blob);
          let link = document.createElement("a");
          link.href = data;
          link.download = url;
          link.click();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSelectDivision () {
      this.clean = true;
      api
        .doGet("/api/degree/"+ this.selectDivision)
        .then((response) => {
          this.careers = response.data
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => (this.loading = false));
    },
    cleanFilters() {
      this.reports = this.reportsCopy
      this.selectTitle = "";
      this.selectDivision = "";
      this.selectDegree = "";
      this.selectYear = "";
      this.clean = false;
    },
    searchReport() {
      if (this.selectTitle != "" || this.selectDivision != "" || this.selectDegree != "" || this.selectYear != "") {
        this.clean = true;
        if (this.selectDivision != "") {
          if (this.divisions.filter(d => d.idAcademicDivision == this.selectDivision).length > 0) {
            api
              .doPost("/api/reports/search", {
                title: this.selectTitle,
                division: this.divisions.filter(d => d.idAcademicDivision == this.selectDivision)[0].acronym,
                degree: this.selectDegree,
                year: this.selectYear.split("-")[0],
              })
              .then((response) => {
                this.reports = response.data;
              })
              .catch((error) => {
                console.error(error);
              })
              .finally(() => (this.loading = false));
          }
        } else {
          api
            .doPost("/api/reports/search", {
              title: this.selectTitle,
              division: this.selectDivision,
              degree: this.selectDegree,
              year: this.selectYear.split("-")[0],
            })
            .then((response) => {
              this.reports = response.data;
            })
            .catch((error) => {
              console.error(error);
            })
            .finally(() => (this.loading = false));
        }
      }
    }
  },
};
</script>

<style scoped>
body {
  height: 100vh;
}
/*009475 color verde*/

.funciones {
  color: #002e60;
  width: 100%;
  text-align: left;
  margin-left: 5%;
  border-left: 3px solid #002e60;
  height: 45px;
}
.funciones > h3 {
  line-height: 50px;
  margin-left: 0.5%;
}
</style>
