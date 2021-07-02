import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../redux/actions/user';


const PrivateRoute = ({ component, ...rest }) => {
    const { isLogin, token } = useSelector(state => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(token));
    }, []);

    const Component = component;
    return (
        <Route {...rest} 
            render={(props) => isLogin ? (<Component {...props} />) : (<Redirect to="/auth" />)} 
        />
    )
}

export default PrivateRoute
