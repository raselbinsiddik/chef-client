// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center mb-4 text-lg'>
            <div >
                <form className='mt-3'>
                    <label htmlFor="">name</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="text" name="name" id="" placeholder='Your Name' required /><br />
                   <label htmlFor="">photo Url</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="text" name="photo url" id="" placeholder='photo url' required /><br />
                        <label htmlFor="">email</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="email" name="email" id="" placeholder='Your Email' required /><br />
                    <label htmlFor="">password</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="password" name="password" id="" placeholder='Password' required /><br />

                    <button type='submit' className='bg-yellow-400 p-3 m-3 text-xl rounded-lg w-72'>Submit</button>
                </form>
                Do not have account?<Link to="/register"> Register</Link>
            </div>
        </div>
    );
};

export default Register;