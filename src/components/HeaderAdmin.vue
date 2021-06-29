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
        aria-labelledby="sidebar-no-header-title"
        no-header
        backdrop
        shadow
      >
        <template #default="{ hide }">
          <div class="p-5">
            <b-row>
              <b-col cols="12">
                <h4 id="sidebar-no-header-title">Menú</h4>
              </b-col>
            </b-row>

            <nav class="mb-3">
              <b-nav vertical>
                <b-nav-item href="/librarian/registro-bibliotecario" @click="hide">Registrar Bibliotecario</b-nav-item>
                <b-nav-item href="/librarian/registrar-reporte" @click="hide">Registrar Reportes</b-nav-item>
                <b-nav-item href="/librarian/consultar-reportes" @click="hide">Consultar reportes</b-nav-item>
                <b-nav-item href="#" @click="hide">Dar de Baja Estudiantes</b-nav-item>
                <b-nav-item href="/logout" @click="hide">Cerrar Sesión</b-nav-item>
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