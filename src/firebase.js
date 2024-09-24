import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyHa642YithuikObbUsE0N-6j8oawbHqM",
  authDomain: "clone-c89f3.firebaseapp.com",
  projectId: "clone-c89f3",
  storageBucket: "clone-c89f3.appspot.com",
  messagingSenderId: "973503276561",
  appId: "1:973503276561:web:d9b6e14e22f776432373b0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
