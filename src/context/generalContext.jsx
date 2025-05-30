import { createContext, useReducer } from "react";
import generalReducer from '../reducers/generalReducer'

const initialState = {
    screenValue: "0"
}

export const GeneralContext = createContext(initialState);

export const GeneralProvider = ({children}) => {
    const [state, dispatch] = useReducer(generalReducer, initialState);

    return (
        <GeneralContext.Provider value={{state, dispatch}}>
            {children}
        </GeneralContext.Provider>
    )
}