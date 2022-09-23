<template>
  <v-app-bar elevation="0">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title class="d-flex">
      <v-icon size="30px">mdi-youtube</v-icon>
      <span class="font-weight-bold">YouTube</span>
    </v-app-bar-title>
    <div class="pr-16 w-50 d-flex">
      <v-text-field
        variant="outlined"
        label="検索"
        class="rounded-0"
        density="compact"
        hide-details
      ></v-text-field>
      <v-btn size="large" class="bg-grey-darken-1 rounded-0">
        <v-icon size="25px">mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon size="small" class="bg-black ml-2"
        ><v-icon size="25px">mdi-microphone</v-icon></v-btn
      >
    </div>
    <div class="pr-4 pl-16">
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn color="blue" variant="outlined">
        <v-icon>mdi-account-circle-outline</v-icon>
        ログイン
      </v-btn>
    </div>
  </v-app-bar>
</template>
