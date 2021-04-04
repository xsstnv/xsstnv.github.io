import { GET_THEME } from '../actions/types';

const initialState = {
    theme: localStorage.getItem('theme'),
};

export default function (state = initialState, action) {
       
    switch (action.type) {

        case GET_THEME:
            return {
                ...state,
                theme: action.payload
            };

        default:
            return state;
    }
};