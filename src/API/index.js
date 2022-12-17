import axios from "axios";
// const baseURL = process.env.REACT_APP_BASE_URL
const API = axios.create({ baseURL: "https://admin.naxa.com.np/api" })
export default API;