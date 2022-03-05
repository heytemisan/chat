import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

//modified firebase store ~ upgraded to version "firebase": "^9.4.0"

const firebaseConfig = {
    apiKey: "AIzaSyBi1HrXNAtncuBLMzthLVd2BXjQPJ3M81I",
    authDomain: "chat2-1ad8a.firebaseapp.com",
    projectId: "chat2-1ad8a",
    storageBucket: "chat2-1ad8a.appspot.com",
    messagingSenderId: "529148473204",
    appId: "1:529148473204:web:bea5850106bf5e3b1d4621"
};

//reintialize database ~ refactored firebase app
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);//access to the database
const auth = getAuth(); //access to the authentication
const provider = new GoogleAuthProvider(); //access tp the provider

export { db, auth, provider };