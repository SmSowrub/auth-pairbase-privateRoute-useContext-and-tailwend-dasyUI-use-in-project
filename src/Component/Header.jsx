import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProviders';

const Header = () => {
    const {user,logOut}=useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error.massage))
    }
    
    return (
        <div className="navbar bg-primary flex justify-between  text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">Auth UI</a>
            <div className='flex justify-center p-3'>
                <Link className='mr-5' to='/'>Home</Link>
                <Link className='mr-5' to='/login'>Login</Link>
                <Link className='mr-5' to='/register'>Register</Link>
                <Link className='mr-5' to='/orders'>Orders</Link>
                {
                    user && <Link className='mr-5' to='/profile'>Profile</Link>
                }
                {
                    user ? <p><span>{user.email}</span> <button onClick={handleLogOut} className="btn btn-xs">Log out</button></p> 
                    :<Link to='/login' className="btn btn-xs">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Header;