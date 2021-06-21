<template>
  <div>
    <headerAdmin />

    <fondo />
  </div>
</template>


<script>
import Vue from "vue";
import VueRouter from "vue-router";
import fondo from "../../components/Fondo";
import headerAdmin from "../../components/HeaderAdmin";
//import api from "../../util/api";

Vue.use(VueRouter);
export default {
  name: "RegistroBibliotecario",
  components: {
    fondo,
    headerAdmin,
  },
};
</script>
<style scoped>
* {
  height: 1000px;
}
</style>