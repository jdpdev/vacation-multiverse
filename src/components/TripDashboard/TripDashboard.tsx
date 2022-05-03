import React from 'react'
import { isTripCreated } from '../../state/getters/isTripCreated'
import { useAppSelector } from '../../state/reduxHooks'
import CreateNewTrip from '../CreateNewTrip/CreateNewTrip'
import TripDisplay from '../TripCalendar/TripDisplay'

export default function TripDashboard() {
    const hasTrip = useAppSelector(state => isTripCreated(state.trip))

    return (
        <div>
            { !hasTrip && <CreateNewTrip /> }
            { hasTrip && <TripDisplay /> }
        </div>
    )
}