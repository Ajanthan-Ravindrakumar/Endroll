import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'


const firebaseConfig = {
  apiKey: "AIzaSyCvnpTU4vOd6vsO1GMRS-34zTcgQx1fdbY",
  authDomain: "online-58c85.firebaseapp.com",
  databaseURL: "https://online-58c85-default-rtdb.firebaseio.com",
  projectId: "online-58c85",
  storageBucket: "online-58c85.appspot.com",
  messagingSenderId: "1067761397252",
  appId: "1:1067761397252:web:c9f2ce9791ed3400640f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const dataRef = firebase.database();

export default firebase;



