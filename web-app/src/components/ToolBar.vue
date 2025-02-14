<template>
  <div>
    <v-app-bar prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      />

      <v-spacer />

      <v-btn icon="mdi-logout" @click="onLogout()" />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          v-for="(item, key) in routes"
          :key="key"
          :value="item.value"
          :to="item.value"
          class="text-subtitle-2"
          active-color="primary"
        >
        {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data:() => ({
    drawer: true,
    routes: [
      {
        title: 'Dashboard',
        value: '/dashboard',
      },
      {
        title: 'User Management',
        value: '/user',
      },
      {
        title: 'Admin Management',
        value: '/admin',
      },
    ],
  }),
  methods: {
    onLogout() {
      localStorage.removeItem("auth_token")

      this.$store.commit('UPDATE_SNACKBAR', {
        isActive: true,
        color: 'success',
        msg: 'Successfully logged out',
        timeout: 3000,
      })

      this.$router.push('/login')

    }
  }
}
</script>