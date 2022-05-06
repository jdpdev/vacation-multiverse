import { PayloadAction } from "@reduxjs/toolkit";
import { TripState } from "../TripState";

export const SELECT_EVENT = 'select-event-action'

interface SelectActionPayload {
    id: string
}

export function selectEventAction(id: string): SelectActionPayload {
    return { id }
}

export function selectEventReducer(state: TripState, { payload }: PayloadAction<SelectActionPayload>) {
    const { id } = payload

    if (id != null) {
        const event = state.events.find(e => e.id === id)

        if (event) {
            state.selectedEvent = event
        } else {
            state.selectedEvent = null
        }
    } else {
        state.selectedEvent = null
    }
}