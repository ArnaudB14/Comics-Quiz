// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-G9gqK4YHMxW_obw0awk6FozqUeftQnE",
  authDomain: "comics-quiz-48c02.firebaseapp.com",
  projectId: "comics-quiz-48c02",
  storageBucket: "comics-quiz-48c02.appspot.com",
  messagingSenderId: "643100956272",
  appId: "1:643100956272:web:017cb66af9068ecdfc06b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);