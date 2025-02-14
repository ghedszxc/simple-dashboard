<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        class="text-h3"
      >
        Dashboard
      </v-col>

      <v-col
        cols="12"
      >
        <ejs-kanban
          id="kanban"
          key-field="status"
          :data-source="list"
          :card-settings="cardSettings"
        >
          <e-columns>
            <e-column
              header-text="To Do"
              key-field="Open"
            />
            <e-column
              header-text="In Progress"
              key-field="InProgress"
            />
            <e-column
              header-text="Done"
              key-field="Close"
            />
          </e-columns>
        </ejs-kanban>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-kanban";
export default {
  components: {
    "ejs-kanban": KanbanComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
  data:() => ({
    list: [
      {
        id: 1,
        status: 'Open',
        summary: 'Task-001',
      },
      {
        id: 2,
        status: 'InProgress',
        summary: 'Task-002',
      },
      {
        id: 3,
        status: 'Close',
        summary: 'Task-003',
      }
    ],
    cardSettings: {
      contentField: "summary",
      headerField: "id",
    }
  })
}
</script>