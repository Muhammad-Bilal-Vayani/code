// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU7-8LjUVEtTFH0LP5QalN6Kuwpmg9rPs",
  authDomain: "class-25-ac01f.firebaseapp.com",
  databaseURL: "https://class-25-ac01f-default-rtdb.firebaseio.com",
  projectId: "class-25-ac01f",
  storageBucket: "class-25-ac01f.appspot.com",
  messagingSenderId: "573007148377",
  appId: "1:573007148377:web:b2075eafdfc8dfc7e30848",
  measurementId: "G-1W6K46T4NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
