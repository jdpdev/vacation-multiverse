import { PayloadAction } from "@reduxjs/toolkit";
import { createInstanceEvent, EventTypes } from "../../data/event";
import { serializeDate } from "../../utils/serializeDate";
import { Action } from "../action";
import { TripState } from "../TripState";

export interface NewTripAction extends Action {
    payload: { name: string }
}

interface NewTripActionPayload {
    name: string,
    id: string,
    start: Date,
    end: Date
}

export const NEW_TRIP = 'new-trip-action'

export function createNewTripActionPayload(name: string, id: string, start: Date, end: Date): NewTripActionPayload {
    return {
        name,
        id,
        start,
        end
    }
}

export function createNewTripReducer(state: TripState, { payload }: PayloadAction<NewTripActionPayload>) {
    const { name, id, start, end } = payload

    state.name = name
    state.id = id
    state.events = [
        createInstanceEvent(EventTypes.TripStart, 'Arrival', serializeDate(start)),
        createInstanceEvent(EventTypes.TripEnd, 'Departure', serializeDate(end))
    ]
}