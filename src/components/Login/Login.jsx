// eslint-disable-next-line no-unused-vars
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import {  FaGoogle, FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const auth = getAuth(app);

const Login = () => {
    const { googleProvider, githubProvider, loginUser } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        
        loginUser(email, password)
            .then(result => {
                const login = result.user;
                console.log(login);
            })
            .catch(error => {
            console.log(error);
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
                <form onSubmit={handleLogin}>
                    <input className='p-4 m-3 border w-96 rounded-lg' type="email" name="email" id="" placeholder='Your Email' required /><br />

                    <input className='p-4 m-3 border w-96 rounded-lg' type="password" name="password" id="" placeholder='Password' required /><br />

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