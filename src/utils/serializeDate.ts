import { formatISO, parseISO } from "date-fns";

export function serializeDate(date: Date): string {
    return formatISO(date)
}

export function deserializeDateString(date: string): Date {
    return parseISO(date)
}