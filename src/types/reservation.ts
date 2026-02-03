import type { Field } from "./field";

export type Reservation = {
    id: string;
    startAt: Date;
    field: Field;
}