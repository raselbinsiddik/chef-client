// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Private = ({children}) => {
    const { user , loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Spinner animatin="border" variant="primary" />
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};
        

export default Private;