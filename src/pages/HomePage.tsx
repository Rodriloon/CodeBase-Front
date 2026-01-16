import { getComplexesByAdmin } from "@/api/complexes";
import { FieldList } from "@/components/business/FieldList";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

export function HomePage() {
  const {loading, user}= useAuth()

  const getComplexes= async () =>{
    try {
      const response= await getComplexesByAdmin();
      console.log("Complejos : ", response)
    } catch (error) {
      console.log("error: ", error)
    }
  }

  useEffect(() =>{
    if (loading) return
    if (!user) console.log("sin loguearse")
    else if (user.role == "ADMIN") getComplexes()
    else console.log("Usuario logueado comun")
  },[loading])

  return (
    <div className="w-full flex-1 p-3">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Nuestras Canchas
      </h2>
      <p className="text-sm md:text-base text-gray-500">
        Encontrá la cancha perfecta para tu partido de hoy. Filtrá por capacidad
        y superficie.
      </p>
    </div>
  );
}
