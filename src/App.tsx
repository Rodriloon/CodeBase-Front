import './App.css'
import { currentTheme } from './config/theme'

function App() {
  return (
    <div className="app-container">
      <h1 style={{ color: currentTheme.primaryColor }}>{currentTheme.businessName}</h1>
      <p>Gestión de Canchas y Turnos.</p>
    </div>
  )
}

export default App
