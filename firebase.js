import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBi1HrXNAtncuBLMzthLVd2BXjQPJ3M81I",
    authDomain: "chat2-1ad8a.firebaseapp.com",
    projectId: "chat2-1ad8a",
    storageBucket: "chat2-1ad8a.appspot.com",
    messagingSenderId: "529148473204",
    appId: "1:529148473204:web:bea5850106bf5e3b1d4621"
};

//reintialize database
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore(); //access to the database
const auth = app.auth(); //access to the authentication
const provider = new firebase.auth.GoogleAuthProvider(); //access tp the provider

export { db, auth, provider };