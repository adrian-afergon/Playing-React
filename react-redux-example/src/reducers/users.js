import {SHOW_USERS} from '../actions'

const initialState = {
  list:[]
}

export function showUsers(state, action){
  switch (action, type){
    case SHOW_USERS:
      return Object.assign({}, state, {list: action.payload})
    default:
      retun state
  }
}
