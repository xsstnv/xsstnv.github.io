import { GET_NAVIGATION } from './types';
import client from '../../client';
import { config } from '../../config';

const navigation = 'navigation.json';

export const getNavigation = () => dispatch => {
    client
        .get(config[process.env.REACT_APP_ENV].configPath + navigation)
        .then(response => {
            if (response.data) {
                dispatch({
                    type: GET_NAVIGATION,
                    payload: response.data
                });
            }
        })

};