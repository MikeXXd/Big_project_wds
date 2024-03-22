import axios from "axios";
import { env } from "@/constants/config";

export const baseAPI = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
});


if (env.VITE_TEST_SLOW_API) {
  baseAPI.interceptors.request.use(req => {
    return new Promise(resolve => {
      setTimeout(() => {resolve(req)}, 1000)
    })
  })
}