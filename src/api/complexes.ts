import type { Complex } from "@/types/complex";
import api from "./api";


export const getComplexesByAdmin = async () => { //se envia el id del user por middleware
  const { data } = await api.get<Complex[]>(`/api/v1/complexes/me`);
  return data;
};

export const getComplexById = async (id: string) => {
  const { data } = await api.get<Complex>(`/api/v1/complexes/${id}`);
  return data;
};