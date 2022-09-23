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

<script setup lang="ts">
const listItems = [
  { type: "divider" },
  {
    title: "ホーム",
    value: 1,
    props: {
      prependIcon: "mdi-home",
      href: "/",
    },
  },
  { type: "divider" },
  {
    title: "TODOリスト",
    value: 2,
    props: {
      prependIcon: "mdi-text-box-check-outline",
      href: "/todo/list",
    },
  },
  { type: "divider" },
  {
    title: "アラート",
    value: 3,
    props: {
      prependIcon: "mdi-wrench",
      href: "/alert",
    },
  },
  { type: "divider" },
  {
    title: "アバター",
    value: 4,
    props: {
      prependIcon: "mdi-wrench",
      href: "/avatar",
    },
  },
  { type: "divider" },
  {
    title: "バッジ",
    value: 5,
    props: {
      prependIcon: "mdi-wrench",
      href: "/badge",
    },
  },
  { type: "divider" },
  {
    title: "youtube",
    value: 6,
    props: {
      prependIcon: "mdi-youtube",
      href: "/youtube",
    },
  },
  { type: "divider" },
  {
    title: "image",
    value: 7,
    props: {
      prependIcon: "mdi-wrench",
      href: "/image",
    },
  },
  { type: "divider" },
];
</script>
