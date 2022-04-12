import React, { createContext, Dispatch, useReducer } from 'react'
import { AppState, initialState } from './appState';
import { reducer } from './reducer';
import { Action } from './action';

interface AppContextType {
    state: AppState,
    dispatch: Dispatch<Action>
}

export const AppContext = createContext<AppContextType>({
    state: initialState,
    dispatch: () => {}
})

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