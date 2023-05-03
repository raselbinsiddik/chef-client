// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
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

        createUser(email, password)
            .then(result => {
                const register = result.user;
                console.log(register);
            })
            .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='flex justify-center mb-4 text-lg'>
            <div >
                <form onSubmit={handleRegister} className='mt-3'>
                    <label htmlFor="">name</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="text" name="name" id="" placeholder='Your Name' required /><br />
                   <label htmlFor="">photo Url</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="text" name="photo" id="" placeholder='photo' required /><br />
                        <label htmlFor="">email</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="email" name="email" id="" placeholder='Your Email' required /><br />
                    <label htmlFor="">password</label><br />
                    <input className='p-4 m-3 border w-96 rounded-lg' type="password" name="password" id="" placeholder='Password' required /><br />

                    <button type='submit' className='bg-yellow-400 p-3 m-3 text-xl rounded-lg w-72'>Submit</button>
                </form>
                Already you have account?<Link to="/login"> Login</Link>
            </div>
        </div>
    );
};

export default Register;