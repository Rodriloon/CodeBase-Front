import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { format, addDays, startOfDay, isSameDay } from "date-fns"
import { es } from "date-fns/locale"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, XCircle, AlertTriangle } from "lucide-react"
import type { FieldResponseDTO } from "@/types/field"

interface Booking {
  id: number
  startTime: string
  endTime: string
  status: string
}

const HOURS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

export function FieldDetailPage() {
  const { id } = useParams()
  const [field, setField] = useState<FieldResponseDTO | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [loading, setLoading] = useState(true)

  // Generar lista de próximos 7 días
  const nextDays = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i))

  useEffect(() => {
    if (!id) return
    
    // Fetch Field Info
    fetch(`http://localhost:8080/api/v1/fields/${id}`)
      .then(res => res.json())
      .then(data => setField(data))
      .catch(err => console.error("Error fetching field", err))

    // Fetch Bookings for this field
    fetch(`http://localhost:8080/api/v1/bookings/field/${id}`)
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error("Error fetching bookings", err))
      .finally(() => setLoading(false))

  }, [id])

  if (loading) return <div className="p-8 text-center text-gray-500">Cargando información de la cancha...</div>
  if (!field) return <div className="p-8 text-center text-red-500 text-lg">Cancha no encontrada</div>

  const isSlotOccupied = (hour: number) => {
    const slotTime = startOfDay(selectedDate)
    slotTime.setHours(hour)
    
    // Simple check: if a booking starts exactly at this hour
    // (A real check would verify intervals)
    return bookings.some(b => {
        const bookingStart = new Date(b.startTime)
        // Check if booking is on same day and same hour
        return isSameDay(bookingStart, selectedDate) && bookingStart.getHours() === hour
    })
  }
  
  const isMaintenance = field.status === 'MAINTENANCE';

  return (
    <div className="animate-in fade-in duration-500">
      {/* Detalle de la cancha */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
             <div>
                <h1 className="text-3xl font-bold mb-2">{field.name}</h1>
                <p className="text-gray-600 mb-4">{field.description || "Sin descripción disponible."}</p>
             </div>
             {isMaintenance && (
                 <Badge variant="destructive" className="text-base py-1 px-4 flex items-center gap-2">
                     <AlertTriangle className="w-4 h-4" />
                     En Mantenimiento
                 </Badge>
             )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
             <Badge variant="outline" className="text-sm py-1 px-3 gap-1">
                <Users className="w-4 h-4"/> Fútbol {field.capacity}
             </Badge>
             <Badge variant="outline" className="text-sm py-1 px-3 gap-1">
                <MapPin className="w-4 h-4"/> {field.surface.replace(/_/g, " ")}
             </Badge>
             <Badge variant={field.isIndoor ? "secondary" : "outline"} className="text-sm py-1 px-3">
                {field.isIndoor ? "Techada" : "Al Aire Libre"}
             </Badge>
        </div>
      </div>

      {isMaintenance ? (
          <Card className="bg-destructive/10 border-destructive/20 mb-6">
              <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                  <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                  <h3 className="text-xl font-bold text-destructive mb-2">Cancha No Disponible</h3>
                  <p className="text-muted-foreground">
                      Esta cancha se encuentra actualmente en mantenimiento y no acepta reservas.
                  </p>
              </CardContent>
          </Card>
      ) : (
        <>
          {/* Selector de Días (Tabs horizontales) */}
          <div className="mb-6 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
                {nextDays.map((date) => {
                    const isSelected = isSameDay(date, selectedDate)
                    return (
                        <button
                            key={date.toString()}
                            onClick={() => setSelectedDate(date)}
                            className={`
                                flex flex-col items-center justify-center min-w-[80px] p-3 rounded-lg border transition-all
                                ${isSelected 
                                    ? "bg-primary text-primary-foreground border-primary shadow-md" 
                                    : "bg-card hover:bg-accent border-border text-card-foreground"}
                            `}
                        >
                            <span className="text-xs font-medium uppercase">{format(date, "EEE", { locale: es })}</span>
                            <span className="text-xl font-bold">{format(date, "d")}</span>
                        </button>
                    )
                })}
            </div>
          </div>

          {/* Grilla de Horarios */}
          <Card>
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Horarios Disponibles para el {format(selectedDate, "d 'de' MMMM", { locale: es })}
                </CardTitle>
                <CardDescription>Seleccioná un horario para reservar</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {HOURS.map((hour) => {
                        const occupied = isSlotOccupied(hour)
                        return (
                            <Button 
                                key={hour} 
                                variant={occupied ? "secondary" : "outline"}
                                disabled={occupied}
                                className={`h-14 flex flex-col gap-1 ${occupied ? "opacity-50" : "hover:border-primary hover:text-primary"}`}
                            >
                                <span className="text-lg font-semibold">{hour}:00</span>
                                {occupied ? (
                                    <span className="text-[10px] flex items-center gap-1 text-red-500 font-bold"><XCircle className="w-3 h-3"/> Ocupado</span>
                                ) : (
                                    <span className="text-[10px] text-green-600 font-medium">Disponible</span>
                                )}
                            </Button>
                        )
                    })}
                </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
