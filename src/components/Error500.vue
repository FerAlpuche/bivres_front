<template>
    <div>
      <br>
      <div id="divP">
        <p>403</p>
        <p id="p2">Lo sentimos, algo salió mal.</p>
        <br>
        <img src="../assets/error500.png" style="height: 170px;"/>
      </div>
    <br>
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
      this.$router.push("/")
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

/*#divIMG{
  margin-left: 520px;
  margin-top: -390px;
  height: 300px; 

}*/


</style>