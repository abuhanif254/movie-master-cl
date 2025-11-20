// import React, { useEffect, useState } from 'react';
// import { 
//     createUserWithEmailAndPassword, 
//     getAuth, 
//     onAuthStateChanged, 
//     signInWithEmailAndPassword, 
//     signInWithPopup, 
//     signOut, 
//     updateProfile, 
//     GoogleAuthProvider 
// } from 'firebase/auth';
// import app from '../firebase/firebase.config';
// import { AuthContext } from '../firebase/firebase.config';
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const googleProvider = new GoogleAuthProvider();

//     // ১. নতুন ইউজার তৈরি (Register)
//     const createNewUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     // ২. ইউজার লগইন (Login)
//     const userLogin = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     // ৩. গুগল দিয়ে লগইন (Google Login)
//     const googleLogin = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     };

//     // ৪. লগ আউট (Logout)
//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     };

//     // ৫. প্রোফাইল আপডেট (নাম এবং ছবি)
//     const updateUserProfile = (updatedData) => {
//         return updateProfile(auth.currentUser, updatedData);
//     };

//     // ৬. ইউজার মনিটরিং (Observer)
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });
//         return () => {
//             unsubscribe();
//         };
//     }, []);

//     const authInfo = {
//         user,
//         setUser,
//         loading,
//         createNewUser,
//         userLogin,
//         googleLogin,
//         logOut,
//         updateUserProfile,
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;



import React, { createContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile, 
    GoogleAuthProvider 
} from 'firebase/auth';
import auth from '../firebase/firebase.config'; // সরাসরি auth ইমপোর্ট করা হলো

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // ১. নতুন ইউজার তৈরি (Register)
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // ২. ইউজার লগইন (Login)
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // ৩. গুগল দিয়ে লগইন (Google Login)
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // ৪. লগ আউট (Logout)
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // ৫. প্রোফাইল আপডেট (নাম এবং ছবি)
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    // ৬. ইউজার মনিটরিং (Observer)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        userLogin,
        googleLogin,
        logOut,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;