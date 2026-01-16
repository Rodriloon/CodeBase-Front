import { currentTheme } from "@/config/theme";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

function Header() {
  const {loading, user, logout}= useAuth()

  return (
    <header
      className="border-b shadow-sm sticky top-0 z-40"
      style={{ backgroundColor: currentTheme.primaryColor }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between text-white">
        <Link to="/">
          <div className="flex items-center gap-2">
            {/* Logo podría ir aquí */}
            <h1 className="text-xl md:text-2xl font-bold truncate max-w-[200px] md:max-w-none">
              {currentTheme.businessName}
            </h1>
          </div>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link
            to="/"
            className="hover:opacity-80 cursor-pointer transition-opacity"
          >
            Inicio
          </Link>
          {(!loading && !user) && (
            <Link
              to={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}
              className="hover:opacity-80 cursor-pointer transition-opacity"
            >
              Iniciar sesion
            </Link>
          )}

          {(!loading && user) && <button onClick={logout}>Cerrar sesion</button>}
        </nav>

        {/* Navegación Mobile (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-left">
                  {currentTheme.businessName}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  to="/"
                  className="text-lg font-medium hover:text-primary cursor-pointer p-2 rounded-md hover:bg-accent"
                >
                  Inicio
                </Link>
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
  );
}

export default Header;
