import { combineReducers } from 'redux';
import {INCREMENT} from './actions'

export interface IAppState{
counter:number
}

export const INITIAL_STATE : IAppState={
  counter:0
}

export function rootReducer(state : IAppState, action) : IAppState{
  //state.counter=0
  switch (action.type) {
    case INCREMENT:
      //return { counter: state.counter + 1 }
      return Object.assign({},state, {counter: state.counter +1 })
      // type safe version => npm install tassign --save
    default:
      return state
  }

}