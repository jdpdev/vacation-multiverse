import { AppState, initialState } from "../appState";

export function isTripCreated(state: AppState): boolean {
    return state.tripId === initialState.tripId
}