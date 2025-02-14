<template>
  <div>
    <v-btn
      block
      color="primary"
      variant="flat"
      @click="addUserDialog = true"
    >
      Add User
    </v-btn>
    
    <v-dialog
      v-model="addUserDialog"
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
            Add User
          </span>
          <v-spacer />
          <v-btn
            color="grey-darken-1"
            icon="mdi-close"
            @click="addUserDialog = false"
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
                      mdi-account-circle
                    </v-icon>
                  </v-col>

                  <v-col
                    cols="12"
                    class="font-weight-bold pb-4"
                  >
                    General Information
                  </v-col>

                  <v-col
                    class="d-flex ga-3"
                    cols="12"
                  >
                    <v-text-field
                      v-model="form.firstName"
                      label="First Name"
                      density="compact"
                      hide-details
                      :disabled="isProgress"
                    />
                    <!-- :rules="[requiredInput]" -->
                    <v-text-field
                      v-model="form.lastName"
                      label="Last Name"
                      density="compact"
                      hide-details
                      :disabled="isProgress"
                    />
                    <!-- :rules="[requiredInput]" -->
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="form.email"
                      label="Email"
                      density="compact"
                      hide-details
                      :disabled="isProgress"
                    />
                    <!-- :rules="[requiredInput, validEmail]" -->
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="form.phoneNumber"
                      label="Phone Number (Optional)"
                      density="compact"
                      hide-details
                      :disabled="isProgress"
                    />
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
      addUserDialog: false,

      isValid: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },

      isProgress: false
    }),
    methods: {
      onCloseDialog() {

      },
    }
}
</script>