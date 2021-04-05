import { GET_ROUTING } from './types';
import client from '../../client';
import { config } from '../../config';

const routing = 'routing.json';

export const getRouting = () => dispatch => {
    client
        .get(config[process.env.REACT_APP_ENV].configPath + routing)
        .then(response => {
            if (response.data) {
                dispatch({
                    type: GET_ROUTING,
                    payload: response.data
                });
            }
        })

};