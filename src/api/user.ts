import api from "./api";

export type User = {
  id: number;
  email: string;
  image_url: string;
  phoneNumber: string;
  role: "USER" | "ADMIN";
};

export const getUser = async () => { //se envia token por middleware
  try {
    const response = await api.get<User>(`/api/v1/users/me`);
    console.log("respuesta: ", response);
    return response.data;
  } catch (error) {
    console.log("a ver el error: ", error);
  }
};