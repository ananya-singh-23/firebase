// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
    
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7HhB4WcV7fh6FIgt2jQMnnXj5s77zvoA",
  authDomain: "geo-pals-ad8d5.firebaseapp.com",
  projectId: "geo-pals-ad8d5",
  storageBucket: "geo-pals-ad8d5.firebasestorage.app",
  messagingSenderId: "699414117645",
  appId: "1:699414117645:web:b479c8ae3bd80c58cc0444",
  measurementId: "G-NS4VTVTWB4",
  databaseURL: "https://geo-pals-ad8d5-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth(app);