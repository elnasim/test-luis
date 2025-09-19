<script setup lang="ts"></script>

<template>
  <button class="v-button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.v-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 6px;
  padding: 20px 24px;
  height: 50px;
  box-shadow: 0 4px 20px 0 rgba(115, 115, 115, 0.1);
  background-color: #fff;
  transition: background-color 0.3s ease;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background-color: #f8f8f8;
  }

  &:active {
    background-color: #f0f0f0;
  }
}
</style>
