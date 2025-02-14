<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        :class="`${$vuetify.display.lgAndUp ? 'text-h3' : 'text-h5 font-weight-medium'}`"
      >
        Admin Management
      </v-col>

      <v-col cols="12" lg="2" offset-lg="10">
        <AddAdmin />
      </v-col>

      <v-col cols="12">
        <v-data-iterator
          :items="adminList"
          :items-per-page="global.itemsPerPage"
        >
          <template #header>
            <v-divider />

            <v-list
              v-if="!$vuetify.display.mobile"
              class="pa-0"
              density="compact"
            >
              <v-list-item>
                <v-list-item-title>
                  <v-row no-gutters>
                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-row
                        no-gutters
                        class="fill-height"
                        align-content="center"
                      >
                        <span
                          class="d-inline-block text-truncate text-capitalize text-caption font-weight-bold"
                        >
                          Group Name
                        </span>
                      </v-row>
                    </v-col>

                    <v-col
                      cols="12"
                      md="8"
                    >
                      <v-row
                        no-gutters
                        class="fill-height"
                        align-content="center"
                      >
                        <span
                          class="d-inline-block text-truncate text-capitalize text-caption font-weight-bold"
                        >
                          Members
                        </span>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-list-item-title>
              </v-list-item>
              <v-divider />
            </v-list>
          </template>

          <template #default="{ items }">
            <v-list class="pa-0">
              <template
                v-for="(item, itemIndex) in items"
                :key="itemIndex"
              >
                <v-list-item class="py-2">
                  <v-list-item-title class="text-body-2">
                    <v-row
                      no-gutters
                      align="center"
                    >
                      <v-col
                        cols="12"
                        md="4"
                        class="text-capitalize"
                      >
                        <b v-if="$vuetify.display.mobile">Group Name: </b>
                        {{ item.raw.name }}
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
                        <b v-if="$vuetify.display.mobile">Members: </b>
                        {{
                          !$vuetify.display.mobile ?
                            item.raw.members.toString() :
                            item.raw.members.length
                        }}
                      </v-col>

                      <div class="position-absolute right-0 top-0 mt-3">
                        <v-menu
                          location="start"
                          style="z-index: 99999999999999999;"
                        >
                          <template #activator="{ props }">
                            <v-btn
                              v-bind="props"
                              icon
                              flat
                              size="x-small"
                              style="position: absolute; right: 15px"
                            >
                              <v-icon>
                                mdi-dots-vertical
                              </v-icon>
                            </v-btn>
                          </template>
                          <v-list
                            class="mr-2"
                            density="compact"
                          >
                            <template
                              v-for="(
                                actionItem, key
                              ) in global.tableActions"
                              :key="key"
                            >
                              <v-list-item
                                @click=""
                              >
                                <template #title>
                                  <span class="text-caption">
                                    <v-icon
                                      class="mr-2"
                                      :color="actionItem.color"
                                    >
                                      {{ actionItem.icon }}
                                    </v-icon>
                                    {{ actionItem.text }}
                                  </span>
                                </template>
                              </v-list-item>

                              <v-divider v-if="key + 1 !== global.tableActions.length" />
                            </template>
                          </v-list>
                        </v-menu>
                      </div>
                    </v-row>
                  </v-list-item-title>
                </v-list-item>

                <v-divider
                  v-if="itemIndex + 1 !== items.length"
                />
              </template>
            </v-list>
          </template>

          <template #no-data>
            <v-row
              no-gutters
              justify="center"
              class="mt-4 pa-16 rounded-lg bg-grey-lighten-4"
            >
              <v-col cols="12">
                <v-row
                  no-gutters
                  justify="center"
                >
                  <v-icon
                    size="150px"
                    color="grey"
                  >
                    mdi-account-group
                  </v-icon>
                </v-row>
              </v-col>

              <v-col
                cols="12"
                class="text-center mt-2"
              >
                <v-row
                  no-gutters
                  justify="center"
                >
                  <span class="font-weight-bold text-body-2">
                    You don't have list of admin yet.
                  </span>
                </v-row>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import useGlobal from '@/composables/useGlobal.js'
import AddAdmin from '@/components/admin/addAdmin.vue'
export default {
  components: {
    AddAdmin
  },
  setup() {
    const global = useGlobal()
    return { global }
  },
  computed: {
    adminList(){
      return this.$store.state.user.adminList
    }
  }
}
</script>