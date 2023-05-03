// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Header = () => {
    const { googleProvider } = useContext(AuthContext);
    return (
        <div>
            <nav className='bg-slate-200 p-5 flex justify-between'>
                <Link className='font-bold text-3xl'>Bengol Chefs</Link>
                <div className='text-xl'>
                    <Link to="/">Home</Link>
                    <Link className='ms-2 mr-2'>Blog</Link>
                    <Link to="/login">{googleProvider.photoURL
 }Login</Link>
               </div>
                
            </nav>
        </div>
    );
};

export default Header;