let storeData = JSON.parse(localStorage.getItem("data"));
console.log(storeData[0]);

const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
const btn = document.getElementById("btn-submit");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    loginEmail.value === storeData[0].userEmail &&
    loginPassword.value === storeData[0].password
  ) {
    window.location = "quiz app.html";
  } else if (loginEmail.value !== storeData[0].userEmail) {
    alert("Wrong email")
  }else if(loginPassword.value !== storeData[0].password){
    alert('Wrong password')
  }else if(loginEmail.value=='' && loginPassword.value==''){
    alert('Please Enter the data!')
  }
});
