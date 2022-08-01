export const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_BASE_URL
    : process.env.REACT_APP_DEV_API_BASE_URL;
