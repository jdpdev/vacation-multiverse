import React from 'react'
import { isTripCreated } from '../../state/getters/isTripCreated'
import { useAppSelector } from '../../state/reduxHooks'
import CreateNewTrip from '../CreateNewTrip/CreateNewTrip'
import TripCalendar from '../TripCalendar/TripCalendar'

export default function TripDashboard() {
    const hasTrip = useAppSelector(state => isTripCreated(state.trip))

    return (
        <div>
            { !hasTrip && <CreateNewTrip /> }
            { hasTrip && <TripCalendar /> }
        </div>
    )
}