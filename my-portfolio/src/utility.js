export const getImageUrl = (path) => {
  return (`/assets/${path}`, import.meta.url).href;
}

