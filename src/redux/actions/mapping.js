import { GET_MAPPING } from './types';
import client from '../../client';
import { config } from '../../config';

const mapping = 'mapping.json';

export const getMapping = () => dispatch => {
    client
        .get(config[process.env.REACT_APP_ENV].configPath + mapping)
        .then(response => {
            if (response.data) {
                dispatch({
                    type: GET_MAPPING,
                    payload: response.data
                });
            }
        })

};