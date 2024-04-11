// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ar-tech-b0886.firebaseapp.com",
  projectId: "ar-tech-b0886",
  storageBucket: "ar-tech-b0886.appspot.com",
  messagingSenderId: "494696279753",
  appId: "1:494696279753:web:4475c282af3ec33faf6718"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);