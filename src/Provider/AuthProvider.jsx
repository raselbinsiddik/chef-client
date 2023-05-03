// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null);

// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const logiUser = (email, password) => {
        return sig
    }
    const authInfo = {
        googleProvider,
        githubProvider,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
