import { createSlice } from '@reduxjs/toolkit'
import { createNewTripReducer } from './actions/createNewTrip'
import { selectEventReducer } from './actions/selectEvent'
import { TripState } from './TripState'

export const initialState: TripState = {
    name: null,
    id: null,
    events: [],
    selectedEvent: null
}

export const tripSlice = createSlice({
    name: 'trip',
    initialState,
    reducers: {
        createNewTrip: createNewTripReducer,
        selectEvent: selectEventReducer
    }
})

export const { 
    createNewTrip,
    selectEvent
} = tripSlice.actions
export default tripSlice.reducer