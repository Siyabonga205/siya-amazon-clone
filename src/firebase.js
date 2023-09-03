import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDssdyyiXd_Hroi5s5IM9ztgMbD4IQVhmw",
    authDomain: "clone-5cc29.firebaseapp.com",
    projectId: "clone-5cc29",
    storageBucket: "clone-5cc29.appspot.com",
    messagingSenderId: "365808459696",
    appId: "1:365808459696:web:8409d2d8c45f229ee88075",
    measurementId: "G-6ME4CY4ZKV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };