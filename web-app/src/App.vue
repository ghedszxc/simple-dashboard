<template>
  <v-app>
    <tool-bar v-if="isAuthorized" />
    <v-main>
      <router-view />
      <snack-bar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data:() => ({
    isAuthorized: false
  }),
  mounted(){
    this.isAuthorized = localStorage.getItem("auth_token") ? true : false
  }

}
</script>
