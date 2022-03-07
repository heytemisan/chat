import '../styles/globals.css'
import type { AppProps } from 'next/app';
//check if there's a login using firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../firebase';
import Login from './login'
import Loading from '../components/Loading'
import { useEffect } from 'react';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';


function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);
  useEffect(()=>{
    if (user) {
      const c = collection(db, 'users')   
      //when and if user login.
      setDoc(doc(c, user.uid), { //uid => from the google profile
        email: user.email,
        lastSeen: serverTimestamp(),//firestore time stamp
        photoURL: user.photoURL// access to user google photo img
      },
        { merge: true }
      );
      }
  }, [])
  
  if (loading) return <Loading/>
  if (!user) return <Login />; //no user logged in return login screen
  
  return <Component {...pageProps} />//update & give access to user if logged in
}

export default MyApp
