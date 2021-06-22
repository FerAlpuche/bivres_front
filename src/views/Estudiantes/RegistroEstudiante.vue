<template>
  <div>
    <headerAdmin />
    <div id="divForm">
      <br />
      <h1>Registro de estudiantes</h1>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Correo electrónico:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Ingresa tu correo institucional"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nombre(s):" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Ingresa tu nombre"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Apellidos:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.lastname"
            placeholder="Ingresa tus apellidos"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Matricula:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.enrollment"
            placeholder="Ingresa tu matricula"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="División académica:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.academicDivision"
            :options="divisions"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Nivel academico:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.level"
            :options="levels"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-3" label="Carrera:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.degree"
            :options="degrees"
            required
          ></b-form-select>
        </b-form-group>
        <br />
        <b-button type="submit" variant="primary" style="">Registrar</b-button>

        <b-button type="reset" variant="danger">Cancelar</b-button>
      </b-form>
    </div>
    <fondo />
  </div>
</template>

<script>
import fondo from "../../components/Fondo";
import headerAdmin from "../../components/HeaderAdmin";

export default {
  components: {
    fondo,
    headerAdmin,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        lastname: "",
        enrollment: "",
        academicDivision: null,
        level: null,
        degree: null,
      },
      divisions: [
        { text: "Selecciona uno", value: null },
        "DATIC",
        "DACEA",
        "DAMI",
        "DATEFI",
      ],
      levels: [{ text: "Selecciona uno", value: null }, "TSU", "LIC", "ING"],
      degrees: [{ text: "Selecciona uno", value: null }, "DSM", "PI", "IRD"],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.lastname = "";
      this.form.enrollment = "";
      this.form.academicDivision = null;
      this.form.level = null;
      this.form.degree = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
#divForm {
  height: 750px;
  width: 40%;
  margin-left: 450px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  background-color: #f8f9f9;
}

body {
  margin: auto;
  height: 100vh;
}
button {
  width: 30%;
}
</style>
