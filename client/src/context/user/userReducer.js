import {CLEAR_USER_DATA, GET_USER_DATA, SET_LOADING} from "../types";


const handlers = {
  [GET_USER_DATA]: (state, action) => ({...state, loading: false, status: action.status, login: action.login }),
  [CLEAR_USER_DATA]: (state) => ({...state, loading: false, status: false, login: false}),
  [SET_LOADING]: (state) =>({...state, loading: true}),
  DEFAULT: state => state
}

export const userReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}