<script setup lang="ts"></script>

<template>
  <main class="home-page">
    <nuxt-link
      class="home-page__link"
      to="/sticker"
    >
      Страница со стикером
    </nuxt-link>
  </main>
</template>

<style scoped lang="scss">
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  &__link {
    font-size: 24px;
    text-decoration: underline;
  }
}
</style>
