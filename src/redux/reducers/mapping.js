import { GET_MAPPING } from '../actions/types';

const initialState = {
    mapping: null,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_MAPPING:
            return {
                ...state,
                mapping: action.payload
            };

        default:
            return state;
    }
};