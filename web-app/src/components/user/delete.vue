<template>
  <v-dialog
    v-model="deleteDialog"
    transition="dialog-top-transition"
    max-width="450px"
    class="enhance_dialog"
  >
    <v-card
      :loading="isProgress"
      :style="{ border: `${theme == 'light' && 'thin solid #E8E8E8'}` }"
      :class="`${theme == 'light' && 'bg-white'} px-2 h-100 ${$vuetify.display.mdAndUp && 'rounded-xl'}`"
    >
      <template #loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="orange"
          height="8"
          indeterminate
        />
      </template>

      <v-divider />

      <v-card-text>
        <v-row :class="`h-100 text-center text-body-2 py-5`">
          <v-col
            cols="12"
          >
            <v-icon
              size="100px"
              color="warning"
            >
              mdi-help
            </v-icon>
          </v-col>
          <v-col cols="12">
            Are you sure you want to delete this user?
          </v-col>
          <v-col cols="6">
            <v-btn
              block
              color="green"
              variant="flat"
            >
              Confirm
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              block
              color="red"
              variant="flat"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data:() => ({
    isValid: false,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    },

    isProgress: false
  }),
  computed: {
    selectedUser() {
      return this.$store.state.user.selectedUser
    },
    deleteDialog: {
      get(){
        return this.$store.state.user.deleteDialog
      },
      set(value){
        this.$store.commit("UPDATE_DELETE_DIALOG", value)
      }
    },
  },
  methods: {
    onCloseDialog() {

    },
  }
}
</script>