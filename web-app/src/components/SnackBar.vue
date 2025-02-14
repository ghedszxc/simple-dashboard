<template>
  <v-snackbar
    v-model="snackbar.isActive"
    :timeout="snackbar.timeout"
    :color="snackbar.color">
    {{ snackbar.msg }}
  </v-snackbar>
</template>
<script>
export default {
    computed: {
        snackbar() {
            return this.$store.state.global.snackbar
        }
    }
}
</script>