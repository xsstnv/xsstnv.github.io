import { GET_ROUTING } from '../actions/types';

const initialState = {
    routing: null,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_ROUTING:
            return {
                ...state,
                routing: action.payload
            };

        default:
            return state;
    }
};