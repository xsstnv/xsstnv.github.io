import { GET_MAPPING } from './types';
import client from '../../client';

const mapping = '/mapping.json';

export const getMapping = () => dispatch => {
    client
        .get(process.env.REACT_APP_CONFIG + mapping)
        .then(response => {
            if (response.data) {
                dispatch({
                    type: GET_MAPPING,
                    payload: response.data
                });    
            }
        })

};