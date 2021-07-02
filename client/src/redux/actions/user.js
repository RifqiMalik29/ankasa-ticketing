import { GET_USER } from '../constants';
import * as api from '../../api';

export const getUser = token => async (dispatch) => {
    try {
        const result = await api.getOwnUser(token);

        dispatch({ type: GET_USER, payload: result.data });
    } catch (error) {
        console.log(error.message);
    }
};