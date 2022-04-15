// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTVn1f6oYqKGnPKMSIPjspWYEKXpdg6ss",
  authDomain: "onion-project-9c61d.firebaseapp.com",
  projectId: "onion-project-9c61d",
  storageBucket: "onion-project-9c61d.appspot.com",
  messagingSenderId: "673540859275",
  appId: "1:673540859275:web:e531d6d30081428ec03b8e",
  measurementId: "G-8EME4VEYWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;