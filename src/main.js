import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import {BootstrapVue, IconsPlugin} from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from "vue-router"
//import router from "./router"

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
