<template>
  <v-row class="pa-8">
    <v-col
      cols="12"
      md="6"
      lg="4"
      offset-md="3"
      offset-lg="4"
    >
      <v-card class="rounded-lg pa-5">
        <v-card-title class="text-center text-h3">
          Welcome!
        </v-card-title>
        <v-card-text class="mt-6 px-2">
          <v-form
            v-model="isFormValid"
            @submit.prevent="login()"
          >
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.username"
                  label="Username"
                  variant="outlined"
                  :rules="[...global.formRules.requiredField]"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.password"
                  label="Password"
                  :type="!isShowPassword ? 'password' : 'text'"
                  variant="outlined"
                  :rules="[...global.formRules.requiredField]"
                  :append-inner-icon="!isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append-inner="isShowPassword = !isShowPassword"
                />
              </v-col>
              <v-col
                cols="12"
                class="pt-0"
              >
                <v-btn
                  block
                  variant="flat"
                  color="primary"
                  class="py-5"
                  type="submit"
                >
                  Login
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import useGlobal from '@/composables/useGlobal.js'
export default {
    setup() {
        const global = useGlobal()
        return { global }
    },
    data:() => ({
        isFormValid: false,
        isShowPassword: false,
        form: {
            username: "",
            password: ""
        },
    }),
    methods: {
        async login() {
            if (this.isFormValid) {
                try {
                    // await Api.login(form.value)
                    localStorage.setItem("auth_token", 'test_123')

                    this.$store.commit('UPDATE_SNACKBAR', {
                        isActive: true,
                        color: 'success',
                        msg: 'Successfully logged in',
                        timeout: 3000,
                    })

                    this.$router.push('/user')
                } catch (err) {
                    this.$store.commit('UPDATE_SNACKBAR', {
                        isActive: true,
                        color: 'error',
                        msg: err,
                        timeout: 3000,
                    })
                }
            }
        }
    }
}
</script>
<!-- <script setup>
import useGlobal from '@/composables/useGlobal';

import router from '@/router';
import Api from '@/services/api'
import { ref, onMounted, computed } from 'vue';

import { useStore } from 'vuex';
const store = useStore();

const isFormValid = ref(false)

const isShowPassword = ref(false)
const form = ref({
    username: "",
    password: ""
})

// onMounted(async () => {
//     const _id = router.currentRoute.value.params.id
//     if (_id) {
//         Api.getDisciple(_id).then(res => {
//             selectedDisciple.value = res.data
//         })
//     }
// })

async function login() {
    if (isFormValid.value) {
        try {
            // await Api.login(form.value)
            // useGlobal().snackbar.value = {
            //     isActive: true,
            //     color: 'success',
            //     msg: 'this is it',
            //     timeout: 3000,
            // }

            store.commit("UPDATE_SNACKBAR", {
                isActive: true,
                color: 'success',
                msg: 'this is it',
                timeout: 3000,
            })

            console.log(store._modules.root.state.global)
        } catch (err) {
            console.log(err)
        }
    }
}
</script> -->

<style scoped>

</style>