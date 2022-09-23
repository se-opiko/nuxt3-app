<template>
  <v-table>
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.text"
        >
          {{header.text}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
  interface DataTableHeader {
    text: string
    value: string
  }
  const props = defineProps({
    headers: {
      type: Object as PropType<DataTableHeader[]>
    },
  });
  // TODO:indexを揃える
  let headerKey = computed(() => {
    let keys = [];
    headers.forEach((header: DataTableHeader) => {
      keys.push(header.value);
    });
    return keys;
  });
</script>