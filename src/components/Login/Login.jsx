// eslint-disable-next-line no-unused-vars
import React from 'react';
import {  FaGoogle, FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <div className='mt-3 text-center'>
                <form>
                    <input className='p-4 m-3 border w-96 rounded-lg' type="email" name="email" id="" placeholder='Your Email' required /><br />

                    <input className='p-4 m-3 border w-96 rounded-lg' type="password" name="password" id="" placeholder='Password' required /><br />

                    <button type="submit" className='bg-yellow-400 p-3 m-3 text-xl rounded-lg w-72 '>Submit</button>  
                </form>
                Do not have account?<Link to="/register"> Register</Link>
            </div>
            <div className='mt-4 text-xl'>
                <p className='bg-slate-100 p-2 mx-auto w-52 flex'><FaGoogle className='text-green-600 mt-1 mr-2'></FaGoogle> Google Sign in</p>
                <p className='bg-slate-100 p-2 mx-auto w-52 flex mt-2'><FaGithub className='text-green-600 mt-1 mr-2'></FaGithub> Github Sign in </p>
                
        </div>
        </div>
    );
};

export default Login;