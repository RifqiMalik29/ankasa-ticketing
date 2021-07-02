import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants';
import * as api from '../../api';

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

export const loginSuccess = token => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    };
};

export const loginFailed = error => {
    return {
        type: LOGIN_FAILED,
        payload: error,
    };
};

export const login = (setData, history) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const result = await api.signin(setData);

        dispatch(loginSuccess(result.data.token));

        history.push("/");
    } catch (error) {
        console.log(error);
        dispatch(loginFailed(error));
    }
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};