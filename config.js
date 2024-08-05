// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyCF0qwD9RRwdlC-s_GP0pR7NlwPlqAHdjw",
  authDomain: "practice-6def6.firebaseapp.com",
  projectId: "practice-6def6",
  storageBucket: "practice-6def6.appspot.com",
  messagingSenderId: "103077269097",
  appId: "1:103077269097:web:6d9d52254558a830e41cf8",
  measurementId: "G-S4X4ZMMZ2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

