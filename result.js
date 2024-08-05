import { auth } from "./config.js";

import { signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

let resultData = JSON.parse(localStorage.getItem("cz"));

console.log(resultData);

let marks = document.querySelector("#marks");

// Get references to the HTML elements
let resultCard = document.getElementById("result-card");
let resultMessage = document.getElementById("result-message");
let resultDescription = document.getElementById("result-description");

// Set the content based on the quiz result

if (resultData.result >= 40) {
  resultCard.classList.add("passed");
  resultMessage.textContent = "Congratulations!";
  resultDescription.textContent = "You passed the quiz.";
  marks.innerHTML = `Your Score:${resultData.result}/100`;
} else {
  resultCard.classList.add("failed");
  resultMessage.textContent = "Sorry, you failed.";
  resultDescription.textContent = "Please try again.";
  marks.innerHTML = `Your Score: ${resultData.result}/100`;
}

const againQuiz = document.querySelector("#again-quiz");
const LogOut = document.querySelector("#logout-btn");

againQuiz.addEventListener("click", () => {
  window.location = "quiz app.html";
});


//Logout user


 const modal = document.getElementById("logoutModal");
 const logoutBtn = document.getElementById("logout-btn");
 const closeBtn = document.querySelector(".logout-close-btn");
 const confirmLogout = document.getElementById("confirmLogout");
 const cancelLogout = document.getElementById("cancelLogout");





// Show modal
logoutBtn.addEventListener('click' , ()=>{

  modal.style.display = 'flex';
})


// Close modal
closeBtn.addEventListener('click' , ()=>{

  modal.style.display = 'none';
})


cancelLogout.addEventListener('click' , ()=>{

  modal.style.display = 'none';
})


confirmLogout.addEventListener('click' , ()=>{

  signOut(auth)
    .then(() => {
      window.location = "login in.html";
    })

    .catch((error) => {
      console.error("Sign out error:", error);
    });

})


window.addEventListener('click' , (event)=>{
  if (event.target === modal) {
    modal.style.display = "none";
  }

})





// LogOut.addEventListener("click", () => {
//   signOut(auth)
//     .then(() => {
//       alert('You are logout sucessfully')
//       window.location = "login in.html";
//     })
//     .catch((error) => {
//       alert(error);
//     });
// });


