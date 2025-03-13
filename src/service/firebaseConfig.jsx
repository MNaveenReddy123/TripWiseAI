
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_FIREBASE_ID,
  authDomain: "trip-88a22.firebaseapp.com",
  projectId: "trip-88a22",
  storageBucket: "trip-88a22.firebasestorage.app",
  messagingSenderId: "761890695114",
  appId: "1:761890695114:web:5331c255514bdc97fe1133",
  measurementId: "G-Z8EVC5Z36L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);