import { baseAPI } from "@/services/baseAPI";
import { User } from "../constants/types";

export function signup(email: string, password: string) {
  return baseAPI
    .post<User>("users/signup", { email, password })
    .then((res) => res.data);
}
export function login(email: string, password: string) {
  return baseAPI
    .post<User>("users/login", { email, password })
    .then((res) => res.data);
}

export function logout() {
  return baseAPI.delete("users/logout");
}

export function getLoggetInUser() {
  return baseAPI.get<User | undefined>("users/session").then(res => res.data ?? undefined 
  )
}
