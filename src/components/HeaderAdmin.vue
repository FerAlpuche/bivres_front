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
        <span class="text-white">Biblioteca Virtual de Reportes de Estadía - Bibliotecario</span>
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
              <b-nav vertical>
                <b-nav-item href="/librarian/consultar-reportes" @click="hide">Consultar Reportes</b-nav-item>
                <b-nav-item href="/librarian/consultar-solicitudes" @click="hide">Consultar Solicitudes</b-nav-item>
                <b-nav-item href="/librarian/baja-estudiante" @click="hide">Dar de Baja Estudiantes</b-nav-item>
                <b-nav-item href="/librarian/registro-bibliotecario" @click="hide">Bibliotecarios</b-nav-item>
                <b-nav-item href="/librarian/registrar-reporte" @click="hide">Registrar Reportes</b-nav-item>
                <b-nav-item href="/librarian/restablecer-contrasena" @click="hide">Restablecer contraseña</b-nav-item>
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