import { initialState } from "../tripSlice";
import { TripState } from "../TripState";

export function isTripCreated(state: TripState): boolean {
    return state.name !== initialState.name
}