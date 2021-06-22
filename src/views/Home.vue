<template>
  <div id="home">
    <InicioSesion />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import InicioSesion from "../components/InicioSesion.vue";
export default {
  name: "Home",
  components: {
    InicioSesion,
  },
};
</script>