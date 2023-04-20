import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Fire-config';

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null)
    const [loaders, setLoaders]=useState(true)

    const CreateUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, createUser=>{
            console.log('you have signed in', createUser);
            setUser(createUser)
            setLoaders(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const AuthInfo={
        user,
        loaders,
        CreateUser,
        LoginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;