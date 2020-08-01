import React, {useReducer} from "react";

import {UserContext} from './userContext';
import {userReducer} from "./userReducer";
import {CLEAR_USER_DATA, SET_LOADING} from "../types";

export const UserState = ({children}) => {
  const initialState = {
    status: false,
    loading: false,
    login: false,
  }
  
  const [state, dispatch] = useReducer(userReducer, initialState);
  
  const getUserData = async data => {
    setLoading();
    try {
    // const response = await fetch()
      
    } catch (e) {
      
    }
  }
  
  const setLoading = () => dispatch({type: SET_LOADING});
  const clearUserDate = () => dispatch({type: CLEAR_USER_DATA});
  const {status, loading, login} = state;

  return (
    <UserContext.Provider value={{
      status, loading, login,
      getUserData, setLoading, clearUserDate
    }}>
      {children}
    </UserContext.Provider>
  )
}