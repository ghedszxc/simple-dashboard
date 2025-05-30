/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import store from './vuex'


const app = createApp({
    extends: App
}).use(store)

registerPlugins(app)

app.mount('#app')
