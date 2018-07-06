import C from './constants';

export const addMessage = (message) => {
    return {
        type: C.ADD_MESSAGE,
        payload: message
    };
}

export const removeMessage = (index) => {
    return {
        type: C.REMOVE_MESSAGE,
        payload: index
    };
}