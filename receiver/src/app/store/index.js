import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import C from './constants';
import {addMessage, removeMessage} from './actions';

const store = createStore(reducers);

const consoleMessages = store => next => action => {
    let result;
    console.groupCollapsed(`dispatching action => ${action.type}`);
    console.log('messages', store.getState());
    result = next(action);
    console.log('messages', store.getState());
    console.groupEnd();

    return result;
}

export default (intialState={}) => {
    return applyMiddleware(consoleMessages)(createStore)(reducers, intialState);
}


