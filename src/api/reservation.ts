import type { Reservation } from "@/types/reservation";
import api from "./api";

export const getReservationsByUser = async () => {
  const { data } = await api.get<Reservation[]>(`/api/v1/reservations/me`);
  return data;
};
