import { currentTheme } from './config/theme'
import { FieldList } from '@/components/business/FieldList'
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      {/* Header simple */}
      <header className="border-b shadow-sm sticky top-0 z-40" style={{ backgroundColor: currentTheme.primaryColor }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
             {/* Logo podría ir aquí */}
             <h1 className="text-xl md:text-2xl font-bold truncate max-w-[200px] md:max-w-none">
               {currentTheme.businessName}
             </h1>
          </div>
          
          {/* Navegación Desktop */}
          <nav className="hidden md:flex gap-6 font-medium">
             <span className="hover:opacity-80 cursor-pointer transition-opacity">Inicio</span>
             <span className="hover:opacity-80 cursor-pointer transition-opacity">Mis Reservas</span>
             <span className="hover:opacity-80 cursor-pointer transition-opacity">Perfil</span>
          </nav>

          {/* Navegación Mobile (Sheet) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-left">{currentTheme.businessName}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  <span className="text-lg font-medium hover:text-primary cursor-pointer p-2 rounded-md hover:bg-accent">
                    Inicio
                  </span>
                  <span className="text-lg font-medium hover:text-primary cursor-pointer p-2 rounded-md hover:bg-accent">
                    Mis Reservas
                  </span>
                  <span className="text-lg font-medium hover:text-primary cursor-pointer p-2 rounded-md hover:bg-accent">
                    Perfil
                  </span>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Nuestras Canchas</h2>
          <p className="text-sm md:text-base text-gray-500">
            Encontrá la cancha perfecta para tu partido de hoy. Filtrá por capacidad y superficie.
          </p>
        </div>
        
        <FieldList />
      </main>
    </div>
  )
}

export default App
