let storeData = JSON.parse(localStorage.getItem("data"));
console.log(storeData[0]);

const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
const btn = document.getElementById("btn-submit");
const div =  document.getElementById('div');

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    loginEmail.value === storeData[0].userEmail &&
    loginPassword.value === storeData[0].password
  ) {
    window.location = "quiz app.html";
  } else if (loginEmail.value === "" && loginPassword.value === "") {
    alert('Please fill all the field');
  } else if(password.value==''|| password.value != storeData[0].password) {
    alert('Please Enter the password Again')

  }else{
    alert('Error')
  }
});
