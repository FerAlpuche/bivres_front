<template>
  <div>
    <b-container>
      <b-row align-v="center">
        <b-col align-v="center">
          <div>
            <img
              style="width: 20%; margin: 0 0 5% 0"
              src="../assets/logo-utez.png"
              class="rounded-0"
            />
          </div>
          <b-card
            no-body
            class="overflow-hidden mx-auto"
            style="
              max-width: 30%;
              background: #ffff;
              border-radius: 15px;
              box-shadow: 2px 2px 2px 2px #dfd6d8;
            "
          >
            <b-row>
              <b-col md="12">
                <b-card-body
                  body-text-variant="black"
                  class="mt-2"
                  title="Inicio de sesión"
                >
                
                <div>
                  <b-alert class="mt-4" variant="danger" show v-if="flag">
                    {{errorMessage}}
                  </b-alert>
                </div>

                  <b-form align="left" class="mt-4">
                    <b-form-group
                      class="mt-3 fw-bold"
                      id="input-group-1"
                      label="Correo electrónico"
                      label-for="input-1"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-1"
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        v-model="user.email"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      class="mt-3 fw-bold"
                      id="input-group-2"
                      label="Contraseña"
                      label-for="input-2"
                    >
                      <b-form-input
                        autocomplete="off"
                        size="sm"
                        class="mt-3"
                        id="input-2"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        v-model="user.password"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-form>
                  <div class="mx-auto">
                    <b-button
                      @click="authenticate()"
                      class="mt-4 w-100"
                      style="background-color: #002e60"
                    >
                      Ingresar
                    </b-button>
                  </div>
                  <div class="mx-auto">
                    <b-button
                      @click="studentLogin()"
                      class="mt-2 w-100"
                      style="background-color: #009475"
                    >
                      Soy estudiante
                    </b-button>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
            <template #footer>
              <p>¿No te has registrado? Haz click <a href="">aquí</a></p>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <fondo />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import api from "../util/api";
import fondo from "../components/Fondo.vue";

Vue.use(VueRouter);
export default {
  components: {
    fondo,
  },
  data() {
    return {
      flag: false,
      errorMessage: "",
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    authenticate() {
      if (this.user.email != "" && this.user.password != "") {
        if (this.isEmail(this.user.email)) {
          const route = this;
          api
            .doPost("/api/auth/signin", {
              email: this.user.email,
              password: this.user.password,
            })
            .then(function ({ data }) {
              console.log(data)
              if (data) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("role", data.role);
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem("isAuthenticated", 1);
                localStorage.setItem("firstAccess", 1);
              }

              if (data.role == "librarian") {
                route.$router.push("/librarian/registrar-reporte");
              } else {
                route.$router.push("/student/consultar-reportes");
              }

            })
            .catch(function (error) {
              console.log(error.response)
              if (error.response.data.isValid) {
                route.flag = true;
                route.errorMessage = "Correo electrónico y/o contraseña no válidos";
              }else{
                route.flag = true;
                route.errorMessage = "Ingresa un correo electrónico válido";
              }
            });
        }else{
          this.flag = true;
          this.errorMessage = "Ingresa un correo electrónico válido";
        }
      } else {
        this.flag = true;
        this.errorMessage = "Todos los campos deben de llenarse";
      }
    },
    studentLogin() {
        this.$router.push("/");
    },
    isEmail(email){
      // Regular expression for email search pattern
      var re = /^[^\s@]+@[^\s@]+$/;
      return re.test(email)
    }
  },
  mounted() {},
  created() {},
};
</script>

<style scoped>
body {
  margin: auto;
}
p {
  font-size: 80%;
}
</style>