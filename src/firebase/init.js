// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj31amm7mnHa8pN0Vnb6C0YM4mwxYnR3I",
  authDomain: "csc340-project2.firebaseapp.com",
  projectId: "csc340-project2",
  storageBucket: "csc340-project2.firebasestorage.app",
  messagingSenderId: "967983651833",
  appId: "1:967983651833:web:51114078261df72fce7b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app);
const auth=getAuth(app);
export {db, auth};