import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpTzFrQGCXa9UGTbLNtQoj_t4WF4JG--E",
  authDomain: "challenge-b05e8.firebaseapp.com",
  projectId: "challenge-b05e8",
  storageBucket: "challenge-b05e8.appspot.com",
  messagingSenderId: "323456490147",
  appId: "1:323456490147:web:94280524db599d3a973d16",
  measurementId: "G-QDKNWFZV7E",
};

// initilize firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
