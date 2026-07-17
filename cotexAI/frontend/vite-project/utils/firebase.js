// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "multiagentai-a8fcd.firebaseapp.com",
    projectId: "multiagentai-a8fcd",
    storageBucket: "multiagentai-a8fcd.firebasestorage.app",
    messagingSenderId: "739288760897",
    appId: "1:739288760897:web:cdfd1ae4ac98a96067bcc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();