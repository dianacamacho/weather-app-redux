import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // take current list of cities and add the new city data to it
      return [ action.payload.data, ...state ];
      // same as return state.concat([action.payload.data])
  }
  return state;
}