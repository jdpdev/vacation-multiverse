import { Action } from "../action";
import { AppState } from "../appState";

export interface NewTripAction extends Action {
    payload: { name: string }
}

export const NEW_TRIP = 'new-trip-action'

export function createNewTrip(name: string): NewTripAction {
    return {
        type: NEW_TRIP,
        payload: {
            name
        }
    }
}

export function createNewTripReducer(state: AppState, action: NewTripAction): AppState {
    return {
        ...state,
        tripName: action.payload?.name ?? '',
        tripId: "0"
    }
}