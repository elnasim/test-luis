<script setup lang="ts">
import { Sticker } from "@/features/sticker";
</script>

<template>
  <main class="sticker-page">
    <div
      v-for="(_, index) in 10"
      :key="index"
      class="sticker-page__block"
    ></div>

    <Sticker />
  </main>
</template>

<style scoped lang="scss">
.sticker-page {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;

  &__block {
    height: 300px;
    background-color: #dddddd;
    border-radius: 16px;
  }
}
</style>
