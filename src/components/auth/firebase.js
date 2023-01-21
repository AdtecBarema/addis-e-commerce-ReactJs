import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlkKA_xUiNHA6OPt_C95vRb1cuwSSW16g",
  authDomain: "addis-e-commerce.firebaseapp.com",
  projectId: "addis-e-commerce",
  storageBucket: "addis-e-commerce.appspot.com",
  messagingSenderId: "881309445248",
  appId: "1:881309445248:web:d4f48d0d26a783e399ca65",
  measurementId: "G-10F4HXRT8S"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
