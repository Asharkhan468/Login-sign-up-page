let storeData = JSON.parse(localStorage.getItem("data"));
console.log(storeData[0]);

const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
const btn = document.getElementById("btn-submit");
const passwordError = document.getElementById("passwordError");
const emailError = document.getElementById("emailError");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    loginEmail.value === storeData[0].userEmail &&
    loginPassword.value === storeData[0].password
  ) {
    emailError.innerHTML=""
    passwordError.innerHTML=""
    window.location = "quiz app.html";
  } else if (loginEmail.value !== storeData[0].userEmail && loginEmail.value !== "") {
    emailError.innerHTML="";
    emailError.innerHTML += "Email is incorrect";
  }else if(loginPassword.value !== storeData[0].password && loginPassword.value !== ""){
    passwordError.innerHTML = "";
    passwordError.innerHTML += "Password is incorrect";
    
  }
  else if (loginEmail.value == "" && loginPassword.value == ""){
    emailError.innerHTML = "";
    emailError.innerHTML = "Email is Required";
    passwordError.innerHTML = "";
    passwordError.innerHTML = "Password is Required";
  }else if(loginEmail.value == ""){
    emailError.innerHTML = "";
    emailError.innerHTML = "Email is Required";
  }else if(loginPassword.value == ""){
    passwordError.innerHTML = "";
    passwordError.innerHTML = "Password is Required";
  }
});
