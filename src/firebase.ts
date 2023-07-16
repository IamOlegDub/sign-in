import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { Auth, GoogleAuthProvider, getAuth } from 'firebase/auth';

export const firebaseConfig = {
    apiKey: 'AIzaSyBVjDhgZuWPBUTXY0MTmZBN121vu58ZfOs',
    authDomain: 'signin-signup-67c78.firebaseapp.com',
    projectId: 'signin-signup-67c78',
    storageBucket: 'signin-signup-67c78.appspot.com',
    messagingSenderId: '37625606537',
    appId: '1:37625606537:web:9f0bb2ad131216b887f158',
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const auth: Auth = getAuth();
