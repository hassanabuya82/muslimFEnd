export const api_url = import.meta.env.VITE_API_URL;

// export const support_workshop =
//   import.meta.env.VITE_SUPPORT_WORKSHOP || "false";
// export const support_dealership =
//   import.meta.env.VITE_SUPPORT_DEALERSHIP || "false";

export const get_token = () => {
  // return localStorage.getItem('muslimBlog_auth')
  console.log(api_url);
  return import.meta.env.VITE_DEFAULT_TOKEN;
};
