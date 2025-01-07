// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
// Deleted Firebase configuration to avoid security breaches
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app);
const auth=getAuth(app);
export {db, auth};
