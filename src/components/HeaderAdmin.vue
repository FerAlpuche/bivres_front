<template>
  <div>
    <div>
      <b-navbar type="light" variant="primary" fixed="top">
        <b-button v-b-toggle.sidebar-no-header size="md" variant="link">
          <b-icon
            variant="white"
            font-scale="2"
            icon="chevron-double-right"
            aria-hidden="true"
          ></b-icon>
        </b-button>
      </b-navbar>
      <b-sidebar
        id="sidebar-no-header"
        no-header
        backdrop-variant="primary"
        backdrop
        shadow
        sidebar-class="border-right border-danger"
      >
        <template #default="{ hide }">
          <div class="p-3">
            <b-row>
              <b-col cols="12">
                <h4 id="sidebar-no-header-title">Menú</h4>
              </b-col>
            </b-row>

            <nav class="mb-3">
              <b-nav vertical justified align="center">
                <b-nav-item
                  href="/librarian/registro-bibliotecario"
                  @click="hide"
                  >Bibliotecarios
                  <b-icon icon="file-earmark-person"></b-icon>
                </b-nav-item>
                <b-nav-item href="/librarian/registrar-reporte" @click="hide"
                  >Reportes <b-icon icon="book"></b-icon
                ></b-nav-item>
                <b-nav-item href="#link-2" @click="hide"
                  >Baja Estudiantes <b-icon icon="person-x"></b-icon
                ></b-nav-item>
                <b-nav-item class="mt-5" href="/logout" @click="hide"
                  >Cerrar Sesión<b-icon icon="lock"></b-icon
                ></b-nav-item>
              </b-nav>
            </nav>
          </div>
        </template>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>