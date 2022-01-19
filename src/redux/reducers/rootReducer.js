import {combineReducers} from 'redux';
import itemsReducer from './itemsReducer';

const reducers={
    items:itemsReducer
}

export default combineReducers(reducers);