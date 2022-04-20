import { createSlice } from '@reduxjs/toolkit'
import { createNewTripReducer } from './actions/createNewTrip'
import { TripState } from './TripState'
import { AnyEvent } from '../data/event'

export const initialState: TripState = {
    name: null,
    id: null,
    events: []
}

export const tripSlice = createSlice({
    name: 'trip',
    initialState,
    reducers: {
        createNewTrip: createNewTripReducer
    }
})

export const { createNewTrip } = tripSlice.actions
export default tripSlice.reducer