// eslint-disable-next-line no-unused-vars
import React from 'react';
import notfound from '../../assets/notfound.jpg'

const NotFoun = () => {
    return (
        <div>
            <div className='flex justify-center '>
                <img className='w-96 h-96 mt-4 mb-4' src={notfound} alt="" />
            </div>
            <div className='text-3xl font-bold text-center'>
                <p>404</p>
                <p>Sorry, not found your information</p>
            </div>
        </div>
    );
};

export default NotFoun;