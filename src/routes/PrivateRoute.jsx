

import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthContext'; 
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;