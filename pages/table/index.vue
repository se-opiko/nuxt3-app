<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
const header = [
  {
    text: "Dessert (100g serving)",
    align: "start",
    sortable: false,
    value: "name",
  },
  { text: "Calories", value: "calories" },
  { text: "Fat (g)", value: "fat" },
];
const item = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
  },
];
</script>

<template>
  <v-main class="bg-primary">
    <v-container>
      <v-card class="py-2 px-3 mb-3">
        <v-data-table
          :headers="header"
          :items="item"
          :items-per-page="5"
          class="elevation-1"
        >
        </v-data-table>
      </v-card>
    </v-container>
  </v-main>
</template>
