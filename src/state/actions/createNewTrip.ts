import { PayloadAction } from "@reduxjs/toolkit";
import { Action } from "../action";
import { AppState } from "../appState";
import { TripState } from "../TripState";

export interface NewTripAction extends Action {
    payload: { name: string }
}

interface NewTripActionPayload {
    name: string,
    id: string
}

export const NEW_TRIP = 'new-trip-action'

export function createNewTripAction(name: string): NewTripAction {
    return {
        type: NEW_TRIP,
        payload: {
            name
        }
    }
}

export function createNewTripReducer(state: TripState, action: PayloadAction<NewTripActionPayload>) {
    state.name = action.payload.name
    state.id = action.payload.name
}