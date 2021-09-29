import {createContext,useReducer} from "react";
import authInitialState from "./initialstates/authInitialState";
import auth from "./reducers/auth";


export const GlobalContext=createContext({})
export const GlobalProvider=({children})=>{
    const [authState]=useReducer(auth,authInitialState)
    const [contactsState]=useReducer(auth,authInitialState)


}


