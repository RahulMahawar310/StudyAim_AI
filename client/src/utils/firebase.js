
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authstudyaim-a8e84.firebaseapp.com",
  projectId: "authstudyaim-a8e84",
  storageBucket: "authstudyaim-a8e84.firebasestorage.app",
  messagingSenderId: "462159231024",
  appId: "1:462159231024:web:c9a450b8582f9f19a295f5"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}