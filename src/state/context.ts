import { createContext, Dispatch } from "react";
import { Action } from "./action";
import { AppState, initialState } from "./appState";

interface AppContextType {
    state: AppState,
    dispatch: Dispatch<Action>
}

export const AppContext = createContext<AppContextType>({
    state: initialState,
    dispatch: () => {}
})