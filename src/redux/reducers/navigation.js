import { GET_NAVIGATION } from '../actions/types';

const initialState = {
    navigation: null,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_NAVIGATION:
            return {
                ...state,
                navigation: action.payload
            };

        default:
            return state;
    }
};