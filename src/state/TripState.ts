import { AnyEvent } from "../data/event"

export interface TripState {
    name: string | null
    id: string | null
    events: AnyEvent[]
}
