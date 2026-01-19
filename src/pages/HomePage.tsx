import { FieldList } from '@/components/business/FieldList'

export function HomePage() {
  return (
    <>
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Nuestras Canchas</h2>
        <p className="text-sm md:text-base text-gray-500">
          Encontrá la cancha perfecta para tu partido de hoy. Filtrá por capacidad y superficie.
        </p>
      </div>
      
      <FieldList />
    </>
  )
}
