import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOM,
  projectId: process.env.REACT_APP_FIREBASE_PRO_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STOR_BUC,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MES_ID,
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db, firebase };
