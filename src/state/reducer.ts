import { AppState } from "./appState";
import { Action } from "./action";
import { createNewTripReducer, NEW_TRIP } from "./actions/createNewTrip";

export function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case NEW_TRIP:  return createNewTripReducer(state, action)
    }

    return state
}