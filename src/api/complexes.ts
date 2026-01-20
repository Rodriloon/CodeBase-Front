import api from "./api";

export type Complex = {
  id: string;
  name: string;
  location: string;
};

export const getComplexesByAdmin = async () => {
  try {
    const response = await api.get<Complex[]>(`/api/v1/complexes`);
    return response.data;
  } catch (error) {
    return error
  }
};

export const getComplexById = async (id: string) => { //todo: Para mi hay que cambiar esto a getComplexByName (y hacer name unique en bd)
  try {
    const response = await api.get<Complex>(`/api/v1/complexes/${id}`);
    return response.data;
  } catch (error) {
    return error
  }
};
