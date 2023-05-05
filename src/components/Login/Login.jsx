// eslint-disable-next-line no-unused-vars
import {  getAuth, signInWithPopup } from 'firebase/auth';
import {  FaGoogle, FaGithub} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const auth = getAuth(app);

const Login = () => {
    const [error, setError] = useState();

    const { googleProvider, githubProvider, loginUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/recipe/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password);
        setError('');
        if (password !== confirm) {
            setError('your password did not match')
            return;
        }
        loginUser(email, password)
            .then(result => {
                const login = result.user;
                console.log(login);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
        
        
    }
    
    const handleGoogleSignIn = () => {
        // eslint-disable-next-line no-undef
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
        })
            .catch(error => {
                console.log(error);
        })
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser);
            })
            .catch(error => {
                console.log(error);
            })
        
    }

    return (
        <div>
            <div className='mt-3 text-center'>
                <h1 className='text-2xl font-bold'>Please Login</h1>
                <form onSubmit={handleLogin} >
                    <input className='p-4 m-3 border w-96 rounded-lg' type="email" name="email" id="" placeholder='Your Email' required /><br />

                    <input className='p-4 m-3 border w-96 rounded-lg' type="password" name="password" id="" placeholder='Password' required /><br />

                   
                        <input className='p-4 m-3 border w-96 rounded-lg'  type="password" name="confirm" id="" placeholder='Your password' required />
                   <br />

                    <p className='text-red-500'> {error}</p>

                    <button type="submit" className='bg-yellow-400 p-3 m-3 text-xl rounded-lg w-72 '>Submit</button>  
                </form>
                Do not have account?<Link to="/register"> Register</Link>
            </div>


            <div className='mt-4 text-xl'>
                <p className='bg-slate-100 p-2 mx-auto w-52 '><button onClick={handleGoogleSignIn} className='flex'><FaGoogle className='text-green-600 mt-1 mr-2'></FaGoogle> Google Sign in</button></p>


                <p className='bg-slate-100 p-2 mx-auto w-52 mt-2'><button onClick={handleGitHubSignIn} className='flex '><FaGithub className='text-green-600 mt-1 mr-2'></FaGithub> Github Sign in</button> </p>
                
        </div>
        </div>
    );
};

export default Login;