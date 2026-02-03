import type { User } from "@/types/user";
import api from "./api";

export const getUser = async () => {//se envia token por middleware
  const { data } = await api.get<User>(`/api/v1/users/me`);
  return data;
};
