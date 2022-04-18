import { PayloadAction } from "@reduxjs/toolkit";
import { Action } from "../action";
import { AppState } from "../appState";
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

export function createNewTripReducer(state: TripState, action: PayloadAction<NewTripActionPayload>) {
    state.name = action.payload.name
    state.id = action.payload.name
}