import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Message from './containers/Message';
import storeFactory from './store';
import { addMessage } from './store/actions';

const store = storeFactory();
window.store = store;

const wsc = new WebSocket('ws://localhost:3000');
wsc.onmessage = function(event) {
    const message = JSON.parse(event.data).message;
    store.dispatch(addMessage(message));
};

ReactDOM.render(
    <Provider store={store}>
        <Message/>
    </Provider>, 
    document.getElementById('root')
);