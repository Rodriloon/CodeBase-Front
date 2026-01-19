import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Warehouse, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { FieldResponseDTO } from "@/types/field"

const formatSurface = (surface: string) => {
  return surface.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
}

export function FieldList() {
  const [fields, setFields] = useState<FieldResponseDTO[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/fields')
      .then((res) => res.json())
      .then((data) => {
        setFields(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching fields:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="text-center py-10">Cargando canchas...</div>
  }

  if (fields.length === 0) {
     return <div className="text-center py-10">No hay canchas disponibles.</div> 
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {fields.map((field) => (
        <Card key={field.id} className="w-full flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{field.name}</CardTitle>
                <CardDescription className="line-clamp-2 mt-1">{field.description || "Sin descripción"}</CardDescription>
              </div>
              <Badge variant={field.status === 'AVAILABLE' ? "default" : "destructive"}>
                {field.status === 'AVAILABLE' ? 'Disponible' : 'Mantenimiento'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex gap-2 flex-wrap mb-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {field.capacity}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                {field.isIndoor ? <Warehouse className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
                {field.isIndoor ? 'Techada' : 'Aire libre'}
              </Badge>
              <Badge variant="secondary">
                {formatSurface(field.surface)}
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Link to={`/field/${field.id}`} className="w-full">
                <Button className="w-full">Ver Disponibilidad</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
