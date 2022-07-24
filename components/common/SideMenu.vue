<template>
  <v-navigation-drawer
    color="#393f4c"
  >
    <div class="text-white text-h5 font-weight-bold pt-3 pl-12">
      <span style="font-family:cursive;">Pandra</span>
    </div>
    <v-list class="text-white" bg-color="#393f4c" :items="listItems">
    </v-list>
    <div class="align-end pb-3 pl-12" style="position:fixed; bottom:0;">
      <span class="text-white"><v-icon size="17px">mdi-copyright</v-icon>opiko</span><span class="text-caption text-white pl-2">2022</span>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  const listItems = [
    {type: 'divider'},
    {
      title: 'ホーム',
      value: 1,
      props: {
        prependIcon: 'mdi-home',
        href: '/'
      },
    },
    {type: 'divider'},
    {
      title: 'TODOリスト',
      value: 2,
      props: {
        prependIcon: 'mdi-text-box-check-outline',
        href: '/todo/list'
      },
    },
    {type: 'divider'},
    {
      title: '作成中',
      value: 3,
      props: {
        prependIcon: 'mdi-wrench',
        href: '/'
      },
    },
    {type: 'divider'},
  ]
</script>