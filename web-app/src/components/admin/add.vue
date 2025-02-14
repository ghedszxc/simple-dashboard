<template>
  <div>
    <v-btn
      block
      color="primary"
      variant="flat"
      @click="addDialog = true"
    >
      Add Admin
    </v-btn>
    
    <v-dialog
      v-model="addDialog"
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

        <v-toolbar color="transparent">
          <span class="font-weight-bold pl-4 pt-1 text-capitalize">
            Add Admin
          </span>
          <v-spacer />
          <v-btn
            color="grey-darken-1"
            icon="mdi-close"
            @click="addDialog = false"
          />
        </v-toolbar>

        <v-divider />

        <v-card-text>
          <v-row :class="`h-100 align-center`">
            <v-col
              cols="12"
              class="mb-4"
            >
              <v-form v-model="isValid">
                <v-row>
                  <v-col
                    cols="12"
                    class="mb-5 text-center"
                  >
                    <v-icon
                      size="150px"
                      color="primary"
                    >
                      mdi-account-group
                    </v-icon>
                  </v-col>

                  <v-col
                    cols="12"
                    class="font-weight-bold pb-4"
                  >
                    General Information
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="groupName"
                      label="Group Name"
                      density="compact"
                      hide-details
                      :disabled="isProgress"
                    />
                    <!-- :rules="[requiredInput]" -->
                  </v-col>

                  <v-col cols="12">
                    <v-btn
                      block
                      color="blue-darken-3"
                      size="small"
                      variant="flat"
                      style="height: 40px"
                      :disabled="isProgress"
                      @click="submit()"
                    >
                      Submit
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data:() => ({
    isValid: false,
    groupName: '',
    isProgress: false
  }),
  computed: {
    addDialog: {
      get(){
        return this.$store.state.user.addDialog
      },
      set(value){
        this.$store.commit("UPDATE_ADD_DIALOG", value)
      }
    },
  },
  methods: {
    onCloseDialog() {

    },
  }
}
</script>