import axios from 'axios';
import * as types from './actionTypes';

const quoteApi = 'https://api.kanye.rest';

export const getKanyeQuote = () => dispatch => {
    axios.get(quoteApi)
    .then(res => {
        //debugger
        dispatch({type: types.GET_QUOTE, payload: res.data})
    })
    .catch(err => console.log(err))
}