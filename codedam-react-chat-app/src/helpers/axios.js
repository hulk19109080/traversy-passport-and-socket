import axios from "axios";

const baseURL = "https://truly-contacts.herokuapp.com/?format=openapi";

let headers = {};
console.log(baseURL);
if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;
