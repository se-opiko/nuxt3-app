<script setup lang="ts">
const listItems = [
  { type: "divider" },
  {
    title: "ホーム",
    value: 1,
    props: {
      prependIcon: "mdi-home",
      to: "/",
    },
  },
  { type: "divider" },
  {
    title: "TODOリスト",
    value: 2,
    props: {
      prependIcon: "mdi-text-box-check-outline",
      to: "/todo/list",
    },
  },
  { type: "divider" },
  {
    title: "アラート",
    value: 3,
    props: {
      prependIcon: "mdi-wrench",
      to: "/alert",
    },
  },
  { type: "divider" },
  {
    title: "アバター",
    value: 4,
    props: {
      prependIcon: "mdi-wrench",
      to: "/avatar",
    },
  },
  { type: "divider" },
  {
    title: "バッジ",
    value: 5,
    props: {
      prependIcon: "mdi-wrench",
      to: "/badge",
    },
  },
  { type: "divider" },
  {
    title: "youtube",
    value: 6,
    props: {
      prependIcon: "mdi-youtube",
      to: "/youtube",
    },
  },
  { type: "divider" },
  {
    title: "イメージ",
    value: 7,
    props: {
      prependIcon: "mdi-wrench",
      to: "/image",
    },
  },
  { type: "divider" },
  {
    title: "テーブル",
    value: 8,
    props: {
      prependIcon: "mdi-wrench",
      to: "/table",
    },
  },
  { type: "divider" },
];
</script>

<template>
  <v-navigation-drawer color="menu">
    <div class="text-white text-h5 font-weight-bold pt-3 pl-12">
      <span style="font-family: cursive">Pandra</span>
    </div>
    <v-list class="text-white" bg-color="menu" :items="listItems"> </v-list>
    <div class="align-end pb-3 pl-12" style="position: fixed; bottom: 0">
      <span class="text-white"
        ><v-icon size="17px">mdi-copyright</v-icon>opiko</span
      ><span class="text-caption text-white pl-2">2022</span>
    </div>
  </v-navigation-drawer>
</template>
