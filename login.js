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
    console.log("Malik kam sahi horaha hy bilkul");
    window.location = "quiz app.html";
  } else if (loginEmail.value === "" && loginPassword.value === "") {
    console.log("Malik apny data enter nahi kiya");
  } else {
    console.log("Malik kuch tu garbar hy mailk!");
  }
});
