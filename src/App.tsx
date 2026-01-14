import { currentTheme } from './config/theme'
import { FieldList } from '@/components/business/FieldList'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      {/* Header simple */}
      <header className="border-b shadow-sm" style={{ backgroundColor: currentTheme.primaryColor }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between text-white">
          <h1 className="text-2xl font-bold">{currentTheme.businessName}</h1>
          <nav className="hidden md:flex gap-4 font-medium">
             <span className="hover:opacity-80 cursor-pointer">Inicio</span>
             <span className="hover:opacity-80 cursor-pointer">Mis Reservas</span>
             <span className="hover:opacity-80 cursor-pointer">Perfil</span>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Nuestras Canchas</h2>
          <p className="text-gray-500">
            Encontrá la cancha perfecta para tu partido de hoy. Filtrá por capacidad y superficie.
          </p>
        </div>
        
        <FieldList />
      </main>
    </div>
  )
}

export default App
