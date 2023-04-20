import React, { useContext } from 'react';
import { AuthContext } from '../Component/Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loaders}=useContext(AuthContext)
    if(loaders){
        return <progress className="progress w-56"></progress>
    }
    if(user){
      return children
    }
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;