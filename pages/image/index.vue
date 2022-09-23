<script setup lang="ts">
let isImg = ref(true);
</script>

<template>
  <v-main class="bg-primary">
    <v-container>
      <v-card class="py-2 px-3 mb-3">
        <h3>アスペクト比 16/9</h3>
        <v-img
          :aspect-ratio="16 / 9"
          :width="300"
          alt="くつを履いている"
          src="https://nuxt-practice-opi.s3.ap-northeast-1.amazonaws.com/img/leaves-g642c1d890_1920.jpg"
        >
        </v-img>
      </v-card>
      <v-card class="py-2 px-3 mb-3">
        <h3>Cover</h3>
        <span class="font-weight-bold"
          >背景に合わせて余白がなくなるように広がる</span
        >
        <v-img
          :width="300"
          alt="くつを履いている"
          src="https://nuxt-practice-opi.s3.ap-northeast-1.amazonaws.com/img/leaves-g642c1d890_1920.jpg"
          cover
        >
        </v-img>
      </v-card>
      <v-card class="py-2 px-3 mb-3">
        <h3>Placeholder</h3>
        <span class="font-weight-bold"
          >画像の読み込み中に表示するプレースホルダーを設定できる</span
        >
        <v-img
          :width="300"
          alt="くつを履いている"
          lazy-src="https://nuxt-practice-opi.s3.ap-northeast-1.amazonaws.com/img/leaves-g642c1d890_1920.jpg"
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular indeterminate color="grey-lighten-4">
              </v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-card>
      <v-card class="py-2 px-3 mb-3">
        <h3>削除ボタン</h3>
        <span class="font-weight-bold">
          削除ボタンを押すと画像が消えるようにする
        </span>
        <div>
          <v-img
            v-if="isImg"
            :width="300"
            alt="くつを履いている"
            src="https://nuxt-practice-opi.s3.ap-northeast-1.amazonaws.com/img/leaves-g642c1d890_1920.jpg"
            style="position: relative"
          >
            <v-icon
              color="white"
              style="z-index: 300; position: absolute; right: 0"
              @click="isImg = !isImg"
            >
              mdi-close-circle-outline
            </v-icon>
          </v-img>
        </div>
      </v-card>
    </v-container>
  </v-main>
</template>
