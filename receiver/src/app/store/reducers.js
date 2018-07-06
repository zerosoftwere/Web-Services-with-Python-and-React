import C from './constants';
import { combineReducers } from 'redux';

export const messages = (state=[], action) => {
    switch (action.type) {
        case C.ADD_MESSAGE:
            return [ ...state, action.payload ];
        case C.REMOVE_MESSAGE:
            return state.filter((message, i) => i !== action.payload);
        default:
            return state;
    }
}

export default combineReducers({messages})