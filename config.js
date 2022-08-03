// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
//require("@firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCpfxrNuo81L6NDVfqR5Y1BGoEtIQhd6Og",
  authDomain: "biblioteca1-5efd6.firebaseapp.com",
  projectId: "biblioteca1-5efd6",
  storageBucket: "biblioteca1-5efd6.appspot.com",
  messagingSenderId: "633712367526",
  appId: "1:633712367526:web:e33c5281d19402a7e2e167"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();