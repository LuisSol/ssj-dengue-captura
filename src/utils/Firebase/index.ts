import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiwKV78u9o4RL-5K3Tn-hap7mgwCFHf8U",
  authDomain: "captura-dengue-ssj.firebaseapp.com",
  projectId: "captura-dengue-ssj",
  storageBucket: "captura-dengue-ssj.appspot.com",
  messagingSenderId: "135157143183",
  appId: "1:135157143183:web:6a468f635400c168d1c2fa",
  measurementId: "G-W8WQED8LV6",
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db, firebase };
