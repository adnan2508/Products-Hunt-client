import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase.config";

  const auth = getAuth(app);  

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

  const logOut = () => {
    return signOut(auth);
  }

  // Observe auth state change
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return() => {
      unsubscribe();
    }
  }, [])

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;