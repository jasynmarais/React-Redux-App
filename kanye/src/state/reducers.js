import * as types from './actionTypes';

const initialState = {
    quote: '',
}

export function quoteReducer(state = initialState, action){
    switch (action.type) {
        case types.GET_QUOTE:
            return { ...state, quote: action.payload.quote };
        default: 
        return state;
    }
}