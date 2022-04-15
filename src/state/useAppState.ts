import React, { useContext } from 'react'
import { AppContext } from './context'

export function useAppState() {
    const { state, dispatch } = useContext(AppContext)

    return {
        state,
        dispatch
    }
}