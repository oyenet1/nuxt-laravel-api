import axios from "axios"

export default defineNuxtPlugin((nuxtApp) => {
  axios.defaults.baseURL = "http://127.0.0.1:8000";
  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  axios.defaults.headers.common["Content_Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.withCredentials = true;
})
