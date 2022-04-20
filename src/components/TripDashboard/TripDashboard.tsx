import React from 'react'
import { useSelector } from 'react-redux'
import { isTripCreated } from '../../state/getters/isTripCreated'
import { useAppSelector } from '../../state/reduxHooks'
import { useAppState } from '../../state/useAppState'
import CreateNewTrip from '../CreateNewTrip/CreateNewTrip'

export default function TripDashboard() {
    const hasTrip = useAppSelector(state => isTripCreated(state.trip))

    return (
        <div>
            { !hasTrip && <CreateNewTrip /> }
        </div>
    )
}