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
          key-field="Status"
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
  data() {
    return {
      list: [
        {
          Id: 1,
          Status: 'Open',
          Summary: 'Analyze the new requirements gathered from the customer.',
          Assignee: 'Andrew Fuller'
        },
      {
          Id: 2,
          Status: 'InProgress',
          Summary: 'Improve application performance',
          Assignee: 'Andrew Fuller'
        },
        {
          Id: 3,
          Status: 'Close',
          Summary: 'Arrange a web meeting with the customer to get new requirements.',
          Assignee: 'Janet Leverling'
        }
      ],
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      }
    }
  }
}
</script>