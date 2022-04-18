import { isAfter } from "date-fns";

/**
 * Returns whether a given end date is after a given start date
 * @param start The start date
 * @param end The end date
 * @returns True if end is after start
 */
export function validateDateRange(start: Date|null, end: Date|null): boolean {
    if (start == null || end == null) {
        return false
    }

    return isAfter(end, start)
}