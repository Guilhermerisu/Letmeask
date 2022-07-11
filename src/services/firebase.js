import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDaJlDVBRb1k4mjw_1VE4M3AWU7x5H6Mi8",
  authDomain: "letmeask-55d4a.firebaseapp.com",
  databaseURL: "https://letmeask-55d4a-default-rtdb.firebaseio.com",
  projectId: "letmeask-55d4a",
  storageBucket: "letmeask-55d4a.appspot.com",
  messagingSenderId: "649042440614",
  appId: "1:649042440614:web:4e421985d9df7cd32c5f67",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
