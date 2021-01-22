import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyC9kQ4-njEFxHjyKp3gDlRrckHQm_CtBSk",
    authDomain: "react-super-chat-35774.firebaseapp.com",
    projectId: "react-super-chat-35774",
    storageBucket: "react-super-chat-35774.appspot.com",
    messagingSenderId: "238089640808",
    appId: "1:238089640808:web:a2d92e4cafe332501994dd",
    measurementId: "G-XYQMCKWYRH",
  });


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const googleSignIn = ()=> auth.signInWithPopup(googleProvider);
