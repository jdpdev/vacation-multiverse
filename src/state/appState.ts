import { AnyEvent, getEmptyEvent } from "../data/event";

export interface AppState {
    tripName: string,
    tripId: string,
    beginEvent: AnyEvent,
    endEvent: AnyEvent,
    events: AnyEvent[]
}

export const initialState: AppState = {
    tripName: '',
    tripId: '',
    beginEvent: getEmptyEvent(),
    endEvent: getEmptyEvent(),
    events: []
}