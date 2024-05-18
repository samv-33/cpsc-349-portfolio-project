
// Function to generate the full URL for an image based on the provided path
// `path` is the relative path to the image file
export const getImageUrl = (path) => {
  return `${process.env.PUBLIC_URL}/${path}`;   // `process.env.PUBLIC_URL` refers to the base URL of the public directory
  // This ensures that the correct base URL is used regardless of the environment
}

