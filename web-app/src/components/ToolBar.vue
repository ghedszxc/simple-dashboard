<template>
  <div style="z-index: 99999999999;">
    <v-app-bar prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      />

      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          v-for="(item, key) in routes"
          :key="key"
          :title="item.title"
          :value="item.value"
          :to="item.value"
        />
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
}
</script>