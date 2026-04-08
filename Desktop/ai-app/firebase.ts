// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2dxHV1B6loV1NePeXcka07Qn4_6a2VL8",
  authDomain: "hollywood-ai-a1607.firebaseapp.com",
  projectId: "hollywood-ai-a1607",
  storageBucket: "hollywood-ai-a1607.firebasestorage.app",
  messagingSenderId: "200963068423",
  appId: "1:200963068423:web:34c02bf6f3fdc3a8e2d0a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()