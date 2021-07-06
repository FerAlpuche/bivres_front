<template>
  <div id="home">
    <InicioSesion />
  </div>
</template>

<script>
import InicioSesion from "../components/InicioSesion.vue";
export default {
  name: "Login",
  components: {
    InicioSesion,
  },
};
</script>