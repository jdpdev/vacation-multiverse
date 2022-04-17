import React from 'react'
import { isTripCreated } from '../../state/getters/isTripCreated'
import { useAppState } from '../../state/useAppState'
import CreateNewTrip from '../CreateNewTrip/CreateNewTrip'

export default function TripDashboard() {
    const { state } = useAppState() 
    const hasTrip = isTripCreated(state)

    return (
        <div>
            { !hasTrip && <CreateNewTrip /> }
        </div>
    )
}