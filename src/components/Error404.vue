<template>
    <div>
      <br>
      <div id="divP">
        <p>404</p>
        <p id="p2">Lo sentimos, página no encontrada</p>
        <br>
        <img src="../assets/code-error.png" style="height: 170px;"/>
      </div>
    <button class="btn btn-dark" @click="back()">Regresar</button>
    </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
body {
  background: linear-gradient(to left, #049475, #013462);
  margin: auto;
  height: 100vh;
}

p{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100px;
  color: black;
  text-shadow: 2px 2px 5px grey;
}

#p2{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  color: black;
}

/*#divP{
  margin-right: 600px;
  margin-top: 190px;
  height: 400px; 
}*/



</style>