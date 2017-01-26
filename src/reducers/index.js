import { combineReducers } from 'redux';
import { FETCH_CAR } from '../actions/index';

const rootReducer = combineReducers({
  carData: carReducer
});

export default rootReducer; 