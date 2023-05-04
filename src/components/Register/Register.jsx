// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const [error, setError] = useState();
    const { createUser } = useContext(AuthContext);

    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // eslint-disable-next-line no-unused-vars
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        setError('');
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return;
        }
       
        createUser(email, password)
            .then(result => {
                const register = result.user;
                console.log(register);
            })
            .catch(error => {
                console.log(error);
                setError(error.meassage);
        })
    }

    return (
        <div className='flex justify-center mb-4 text-lg'>
            <div >
                <h1 className='text-2xl font-bold'>Please Register</h1>
                <form onSubmit={handleRegister} className='mt-3'>
                    <label htmlFor="name">name</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="text" name="name" id="" placeholder='Your Name' required /><br />

                   <label htmlFor="photo url">photo Url</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="text" name="photo" id="" placeholder='photo' required /><br />
                        <label htmlFor="email">email</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="email" name="email" id="" placeholder='Your Email' required /><br />

                    <label htmlFor="password">password</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="password" name="password" id="" placeholder='Password' required /><br />
                
                    <p className='text-danger'>
                        {error}</p><br />
                    
                    <button type='submit' className='bg-yellow-400 p-3 m-3 text-xl rounded-lg w-72'>Submit</button>
                </form>
                Already you have account?<Link to="/login"> Login</Link>
            </div>
        </div>
    );
};

export default Register;