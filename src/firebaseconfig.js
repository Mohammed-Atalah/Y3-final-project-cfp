import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-SsKRdAvjyNgUNJRtLFbO7WmIIgdIglg",
  authDomain: "westemitcfp.firebaseapp.com",
  projectId: "westemitcfp",
  storageBucket: "westemitcfp.appspot.com",
  messagingSenderId: "533075305939",
  appId: "1:533075305939:web:1d2ca3801c0d3632c67b26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication Service
// export const auth = getAuth(app);

// Firestore Services
export const db = getFirestore();
