<template>
  <v-app style="position: fixed; width: 100vw; padding: 0 15px 0 15px; z-index: 99999999999999;">
    <tool-bar v-if="isAuthorized" />
    <v-main>
      <router-view class="pa-5" />
      <snack-bar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data:() => ({
    isAuthorized: false
  }),
  watch: {
    '$route.path': {
        handler: function() {
          this.isAuthorized = localStorage.getItem("auth_token")
        },
        deep: true
    }
  }
}
</script>
<style>
  /* KANBAN CSS */
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-vue-kanban/styles/material.css';
</style>
