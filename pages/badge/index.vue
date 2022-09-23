<script setup lang="ts">
let isNewNotification = ref(true)
let message = ref(0)
const addMessage = () => {
  message.value += 1
}
const clearMessage = () => {
  message.value = 0
}
</script>
<template>
  <v-main>
    <information-card>
      通知数や警告をアイコンやテキストの上下に出すことができる
      content：件数(動的に操作すれば通知件数みたいに使えそう)
    </information-card>
    <div class="pb-4">
      <v-toolbar color="grey-lightten-3">
        <v-btn stacked>
          <v-badge
            
            color="red"
            dot
          >
            <v-icon>mdi-newspaper-variant-outline</v-icon>
          </v-badge>
          ニュース
        </v-btn>
        <v-btn stacked>
          <v-badge
            color="red"
            :content="message"
          
          >
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
          通知
        </v-btn>
        <v-btn></v-btn>
      </v-toolbar>
    </div>
    <div class="d-flex w-25 border py-2 px-4 ">
      <v-btn @click="addMessage" class="text-white mr-2" color="blue">
        通知追加
      </v-btn>
      <v-btn @click="clearMessage" color="green" class="text-white">
        通知クリア
      </v-btn>
    </div>
  </v-main>
</template>