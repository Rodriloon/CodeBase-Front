export interface AppTheme {
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
  businessName: string;
}

export const defaultTheme: AppTheme = {
  primaryColor: "#3b82f6", // Default Blue
  secondaryColor: "#1e40af",
  logoUrl: "/logo.png",
  businessName: "White Label Platform",
};

// Configuración para Peluquería (Ejemplo)
export const barberTheme: AppTheme = {
  primaryColor: "#ec4899", // Pink
  secondaryColor: "#be185d",
  logoUrl: "/barber-logo.png",
  businessName: "Estilo & Corte",
};

// Configuración para Cancha (Defecto)
export const soccerTheme: AppTheme = {
  primaryColor: "#22c55e", // Green
  secondaryColor: "#15803d",
  logoUrl: "/soccer-logo.png",
  businessName: "Futbol Manager 5",
};

// Aquí podrías cargar el tema dinámicamente según variables de entorno o API
export const currentTheme = soccerTheme;
