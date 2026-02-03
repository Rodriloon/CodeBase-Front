export type User = {
  id: number;
  email: string;
  image_url: string;
  phoneNumber: string;
  role: "USER" | "ADMIN";
};