<script setup lang="ts">
  const block1 = [
    {
      title: 'ホーム',
      icon: 'mdi-home-variant',
    },
    {
      title: '探索',
      icon: 'mdi-compass-outline',
    },
    {
      title: 'ショート',
      icon: 'mdi-motion-play-outline',
    },
    {
      title: '登録チャンネル',
      icon: 'mdi-youtube-subscription',
    },
  ]
  const block2 = [
    {
      title: 'ライブラリ',
      icon: 'mdi-animation-play',
    },
    {
      title: '履歴',
      icon: 'mdi-history',
    },
  ]
  const block4 = [
    {
      title: '音楽',
      icon: 'mdi-music',
    },
    {
      title: 'スポーツ',
      icon: 'mdi-trophy-outline',
    },
    {
      title: 'ゲーム',
      icon: 'mdi-youtube-gaming',
    },
    {
      title: '映画と番組',
      icon: 'mdi-filmstrip',
    },
    {
      title: 'ニュース',
      icon: 'mdi-newspaper',
    },
    {
      title: 'ライブ',
      icon: 'mdi-broadcast',
    },
    {
      title: '学び',
      icon: 'mdi-lightbulb-on-20',
    },
    {
      title: 'スポットライト',
      icon: 'mdi-youtube',
    },
    {
      title: '360°動画',
      icon: 'mdi-panorama-sphere-outline',
    },
  ]
  const block6 = [
    {
      title: 'Youtube Premium',
      icon: 'mdi-youtube'
    },
    {
      title: 'Youtube Music',
      icon: 'mdi-arrow-right-drop-circle'
    },
    {
      title: 'Youtube Kids',
      icon: 'mdi-youtube'
    },
    {
      title: 'Youtube TV',
      icon: 'mdi-youtube-tv'
    },
  ]
  const block7 = [
    {
      title: '設定',
      icon: 'mdi-cog-outline'
    },
    {
      title: '報告履歴',
      icon: 'mdi-flag-outline'
    },
    {
      title: 'ヘルプ',
      icon: 'mdi-help-circle-outline'
    },
    {
      title: 'フィードバックを送信',
      icon: 'mdi-comment-alert-outline'
    },
  ]
</script>

<template>
  <v-navigation-drawer>
    <v-list density="compact">
      <!-- ブロック１ -->
      <v-list-item
        v-for="(item, i) in block1"
        :key="i"
        :prepend-icon="item.icon"
        :title="item.title"
      >
      </v-list-item>
      <v-divider color="grey-darken-2"></v-divider>
      <!-- ブロック2 -->
      <v-list-item
        v-for="(item, i) in block2"
        :key="i"
        :prepend-icon="item.icon"
        :title="item.title"
      ></v-list-item>
      <v-divider color="grey-darken-2"></v-divider>
      <!-- ブロック3 -->
      <v-list-item class="py-4 px-6">
        <div >
          <!-- TODO:改行させる方法を調べる -->
          動画の評価、コメント、チャンネル登録を行うにはログインしてください。
        </div>
        <v-btn
          color="blue"
          variant="outlined"
        >
          <v-icon>mdi-account-circle-outline</v-icon>
          ログイン
        </v-btn>
      </v-list-item>
      <v-divider color="grey-darken-2"></v-divider>
      <!-- ブロック4 -->
      <span>探索</span>
      <v-list-item
        v-for="(item, i) in block4"
        :key="i"
        :title="item.title"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
      </v-list-item>
      <v-divider color="grey-darken-2"></v-divider>
      <!-- ブロック5 -->
      <v-list-item
        prepend-icon="mdi-plus-circle-outline"
        title="チャンネル一覧"
      ></v-list-item>
      <v-divider color="grey-darken-2"></v-divider>
      <!-- ブロック6 -->
      <p><span class="font-weight-bold">YOUTUBE</span>の他のサービス</p>
      <v-list-item
        v-for="(item, i) in block6"
        :key="i"
        :title="item.title"
      >
        <template v-slot:prepend>
          <v-icon color="red">{{item.icon}}</v-icon>
        </template>
      </v-list-item>
      <v-divider color="grey-darken-2"></v-divider>
      <!-- ブロック7 -->
      <v-list-item
        v-for="(item, i) in block7"
        :key="i"
        :title="item.title"
        :prepend-icon="item.icon"
      ></v-list-item>
      <v-divider></v-divider>
      <!-- ブロック8 -->
      <v-list-item></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>