import { combineReducers } from 'redux';
import {INCREMENT} from './actions'
import {tassign} from 'tassign';
import {Map} from 'immutable';

export interface IAppState{
counter:number
}

export const INITIAL_STATE : IAppState={
  counter:0
}

export function rootReducer(state : Map<string, any>, action) : Map<string, any>{
  //state.counter=0
  switch (action.type) {
    case INCREMENT:
      // npm install immutable --save
      return state.set('counter',state.get('counter') + 1);

    default:
      return state
  }

}