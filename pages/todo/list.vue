<template>
  <v-app-bar>
    <v-app-bar-title>タスクリスト</v-app-bar-title>
  </v-app-bar>
  <v-main>
    <data-table
      :headers="headers"
    ></data-table>
  </v-main>
</template>

<script setup lang="ts">
  import {useSearchStore} from '@/store/ordersearch'
  const headers = [
    {
        text: '名前',
        value: 'name'
    },
    {
        text: '年齢',
        value: 'old'
    },
    {
        text: '性別',
        value: 'sex'
    },
  ]
</script>