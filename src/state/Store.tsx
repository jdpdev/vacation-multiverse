import React, { useReducer } from 'react'
import { initialState } from './appState';
import { reducer } from './reducer';
import { AppContext } from './context';

interface StoreProps {
    children: JSX.Element
}

export function AppStore({ children }: StoreProps) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{state, dispatch}}>
            { children }
        </AppContext.Provider>
    )
}