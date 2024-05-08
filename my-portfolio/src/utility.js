export const getImageUrl = (dir) => {
  return new URL(`/assets/${dir}`, import.meta.url).href;
};
