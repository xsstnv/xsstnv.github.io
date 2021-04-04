import { GET_THEME } from './types';

export const getTheme = () => dispatch => {

    const theme = localStorage.getItem('theme') || 'light';

    dispatch({
        type: GET_THEME,
        payload: theme
    });
};