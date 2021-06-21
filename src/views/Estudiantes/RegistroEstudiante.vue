<template>
  <div>
    <h1>HOLA</h1>
    <fondo />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import fondo from "../../components/Fondo";

//import api from "../../util/api";

Vue.use(VueRouter);
export default {
  components: {
    fondo,
  },
};
</script>