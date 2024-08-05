import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { auth } from "./config.js";



let storeData = JSON.parse(localStorage.getItem("data"));
// console.log(storeData[0]);

const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
const form = document.getElementById("form");
const passwordError = document.getElementById("passwordError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    loginEmail.value === storeData[0].userEmail &&
    loginPassword.value === storeData[0].password
  ) {
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    window.location = "quiz app.html";
  } else if (
    loginEmail.value !== storeData[0].userEmail &&
    loginEmail.value !== ""
  ) {
    emailError.innerHTML = "";
    emailError.innerHTML += "Email is incorrect";
  } else if (
    loginPassword.value !== storeData[0].password &&
    loginPassword.value !== ""
  ) {
    passwordError.innerHTML = "";
    passwordError.innerHTML += "Password is incorrect";
  } else if (loginEmail.value == "" && loginPassword.value == "") {
    emailError.innerHTML = "";
    emailError.innerHTML = "Email is Required";
    passwordError.innerHTML = "";
    passwordError.innerHTML = "Password is Required";
  } else if (loginEmail.value == "") {
    emailError.innerHTML = "";
    emailError.innerHTML = "Email is Required";
  } else if (loginPassword.value == "") {
    passwordError.innerHTML = "";
    passwordError.innerHTML = "Password is Required";
  }
});



//Google Authentication

const googleIcon = document.querySelector(".google-login-btn");

const provider = new GoogleAuthProvider();
googleIcon.addEventListener('click' , ()=>{

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location = "quiz app.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });

})



