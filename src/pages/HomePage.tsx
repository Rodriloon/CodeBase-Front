import { getComplexById, getComplexesByAdmin } from "@/api/complexes";
import { getReservationsByUser } from "@/api/reservation";
import { useAuth } from "@/context/AuthContext";
import type { Complex } from "@/types/complex";
import { useEffect, useState } from "react";

export function HomePage() {
  //Todo lo que hice aca es un asco y es de testing, pero andan todos los endpoints
  const { loading, user } = useAuth();
  const [complexes, setComplexes] = useState<Complex[]>([]);
  const [complexesLoading, setComplexesLoading] = useState(true);

  const getComplexes = async () => {
    setComplexesLoading(true);
    try {
      const response = await getComplexesByAdmin();
      console.log(response)
      setComplexes(response);
      setComplexesLoading(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getComplex = async (id: string) => {
    try {
      const response = await getComplexById(id);
      console.log("response, ", response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getReservation= async () =>{
        try {
      const response = await getReservationsByUser()
      console.log("response, ", response);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    if (loading) return;
    if (!user) console.log("sin loguearse");
    else if (user.role == "ADMIN") getComplexes();
    else getReservation()
  }, [loading]);

  return (
    <div className="w-full flex-1 p-3">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Nuestras Canchas
      </h2>
      <p className="text-sm md:text-base text-gray-500">
        Encontrá la cancha perfecta para tu partido de hoy. Filtrá por capacidad
        y superficie.
      </p>
      {complexesLoading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {complexes.map((c) => {
            return (
              <li key={c.id} onClick={() => getComplex(c.id)}>
                {c.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
