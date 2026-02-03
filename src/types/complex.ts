import type { Field } from "./field";

export type Complex = {
  id: string;
  name: string;
  location: string;
  fields?: Field[]
};