<script setup lang="ts">
import { VButton } from "@/shared/ui";
import { IconArrow } from "@/shared/icons";
import { fetchPhotos } from "../model/api";

const { data } = fetchPhotos();
</script>

<template>
  <div class="sticker">
    <div class="sticker__title">
      Консультация
      <br />
      эксперта
    </div>

    <div
      v-if="data && data.length"
      class="sticker__photos"
    >
      <img
        v-for="image in data"
        :key="image.id"
        :src="image.url"
        class="sticker__photo"
        alt="cat"
      />
    </div>

    <div class="sticker__bottom">
      <VButton class="sticker__button">Получить консультацию</VButton>
    </div>

    <IconArrow class="sticker__arrow" />
  </div>
</template>

<style scoped lang="scss">
.sticker {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 68px;
  height: 266px;
  padding: 24px 0;
  background-color: #f4f6f9;
  border-radius: 8px 0 0 8px;
  overflow: hidden;
  transition: width 0.3s ease;

  &:hover {
    width: 280px;

    .sticker__title {
      opacity: 1;
    }

    .sticker__button {
      opacity: 1;
    }

    .sticker__photos {
      right: 60px;
    }

    .sticker__photo {
      &:first-child {
        bottom: 0;
        right: 80px;
      }

      &:nth-child(2) {
        bottom: 0;
        right: 40px;
      }
    }

    .sticker__arrow {
      opacity: 0;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 23px;
    text-align: center;
    color: #333;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &__photos {
    position: absolute;
    bottom: 92px;
    right: 2px;
    transition: right 0.3s ease;
  }

  &__photo {
    position: absolute;
    display: block;
    max-width: initial;
    width: 64px;
    height: 64px;
    background-color: black;
    border: 3px solid #f4f6f9;
    border-radius: 16px;
    color: white;
    transition: 0.3s ease;
    transition-property: bottom, right;
    object-fit: cover;

    &:first-child {
      bottom: 80px;
      right: 0;
    }

    &:nth-child(2) {
      bottom: 40px;
      right: 0;
    }

    &:last-child {
      bottom: 0;
      right: 0;
    }
  }

  &__bottom {
    padding: 0 24px;
  }

  &__button {
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  &__arrow {
    position: absolute;
    bottom: 36px;
    right: 22px;
    width: 24px;
    height: 24px;
    color: #d9d9d9;
    transition: opacity 0.3s ease;
  }
}
</style>
