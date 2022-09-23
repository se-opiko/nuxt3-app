<script setup lang="ts">
definePageMeta({
  layout: "youtube",
});

const genreList = [
  {
    title: "すべて",
  },
  {
    title: "ゲーム",
  },
  {
    title: "音楽",
  },
  {
    title: "ライブ",
  },
  {
    title: "野球",
  },
  {
    title: "料理番組",
  },
  {
    title: "自然",
  },
  {
    title: "アクション&アドベンチャー ゲーム",
  },
  {
    title: "最近アップロードされた動画",
  },
];
</script>

<template>
  <v-main>
    <v-sheet border max-width="w-100" class="px-auto">
      <v-slider-group show-arrows>
        <v-slider-group-item
          v-for="genre in genreList.length"
          :key="genre.title"
        >
          <v-btn rounded class="mr-2">{{ genre.title }}</v-btn>
        </v-slider-group-item>
      </v-slider-group>
    </v-sheet>
    メイン
  </v-main>
</template>
