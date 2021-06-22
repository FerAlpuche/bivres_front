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
                <b-nav-item href="#link-1" @click="hide">Consultar Reportes</b-nav-item>
                <b-nav-item href="#link-2" @click="hide">Cerrar Sesión</b-nav-item
                >
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

