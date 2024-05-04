import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        // eslint-disable-next-line no-undef
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth estate change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

        const authInfo ={
        user,
        loading,
        createUser,
        logIn,
        logOut,
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;