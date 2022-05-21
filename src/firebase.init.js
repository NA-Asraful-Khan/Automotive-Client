// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDG_Npn_m3EHemvZDidbHoTRphsx2BZaY",
  authDomain: "tool-e56ed.firebaseapp.com",
  projectId: "tool-e56ed",
  storageBucket: "tool-e56ed.appspot.com",
  messagingSenderId: "404742094420",
  appId: "1:404742094420:web:20eee5771cd0d47db8b7c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;