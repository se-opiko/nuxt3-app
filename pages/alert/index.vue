<template>
  <v-main>
    <!-- コンポーネント説明 -->
    <information-card>
      インフォメーションや処理の成功・失敗の表示とか幅広く使えそう
    </information-card>
    <div class="pb-4">
      <v-alert></v-alert>
    </div>
    <div class=pb-4>
      <p>border付き</p>
      <v-alert border></v-alert>
    </div>
    <div class=pb-4>
      <v-alert icon="mdi-alert-decagram" title="Alert Title" text="アラートテスト" closable></v-alert>
    </div>
    <div class=pb-4>
      <p>コンパクト/色付き/border付き</p>
      <v-alert icon="mdi-alert-decagram" title="Alert Title" text="アラートテスト" closable density="compact" color="blue" border></v-alert>
    </div>
    <div class=pb-4>
      <p>コンパクト/色付き/border付き/outlined</p>
      <v-alert icon="mdi-alert-decagram" title="Alert Title" text="アラートテスト" closable density="compact" color="blue" border variant="outlined"></v-alert>
    </div>
    <div class=pb-4>
      <p>成功</p>
      <v-alert type="success">成功しました</v-alert>
    </div>
    <div class=pb-4>
      <p>インフォメーション</p>
      <v-alert type="info">インフォメーション</v-alert>
    </div>
    <div class=pb-4>
      <p>警告</p>
      <v-alert type="warning">警告</v-alert>
    </div>
    <div class=pb-4>
      <p>エラー</p>
      <v-alert type="error">エラー</v-alert>
    </div>
  </v-main>
</template>