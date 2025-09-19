import type { AsyncData } from "#app";
import type { TPhotos } from "./types";

const url = "https://cataas.com/cat?json=true";

export const fetchPhotos = (): AsyncData<TPhotos[] | undefined, unknown> =>
  useAsyncData<TPhotos[]>("photos", () => {
    return Promise.all([
      $fetch<TPhotos>(url),
      $fetch<TPhotos>(url),
      $fetch<TPhotos>(url),
    ]);
  });
