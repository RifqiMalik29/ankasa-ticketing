import { GET_TICKETS } from '../constants';

import * as api from '../../api';

export const getTickets = () => async (dispatch) => {
    try {
        const { data } = await api.getAllTickets();

        dispatch({ type: GET_TICKETS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};