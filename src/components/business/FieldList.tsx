import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Warehouse, Sun } from "lucide-react"
import { useEffect, useState } from "react"

interface Field {
  id: number
  name: string
  capacity: number
  isIndoor: boolean
  surface: string
}

export function FieldList() {
  const [fields, setFields] = useState<Field[]>([])
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
        <Card key={field.id} className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{field.name}</CardTitle>
              {field.isIndoor ? (
                <Badge variant="secondary" className="gap-1">
                  <Warehouse className="h-3 w-3" /> Techada
                </Badge>
              ) : (
                <Badge variant="outline" className="gap-1">
                  <Sun className="h-3 w-3" /> Aire Libre
                </Badge>
              )}
            </div>
            <CardDescription>{field.surface.replace(/_/g, ' ')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Users className="h-4 w-4" />
              <span className="font-medium">Fútbol {field.capacity}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Ver Disponibilidad</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
