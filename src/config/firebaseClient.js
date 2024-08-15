// Firebase Client SDK (Client-side)
const { initializeApp } = require("firebase/app");
const { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendEmailVerification, 
  sendPasswordResetEmail,
} = require("firebase/auth");


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyD0KHqJ8BNEKvkjN93njGoeopyGXdHYuwk",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "expressblog-534ef.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "expressblog-534ef",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
};
