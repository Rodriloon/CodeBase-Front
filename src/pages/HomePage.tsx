import { FieldList } from "@/components/business/FieldList";

export function HomePage() {
  return (
    <div className="w-full flex-1 p-3">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Nuestras Canchas
      </h2>
      <p className="text-sm md:text-base text-gray-500">
        Encontrá la cancha perfecta para tu partido de hoy. Filtrá por capacidad
        y superficie.
      </p>
      <FieldList />
    </div>
  );
}
