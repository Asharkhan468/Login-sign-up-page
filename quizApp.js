
import { auth } from "./config.js";

import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

//Navbar started

document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.getElementById("dropdownMenuButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownToggle.addEventListener("click", () => {
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", (e) => {
    if (!dropdownToggle.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});







//Navbar ended








let div = document.querySelector("#div");
let ul = document.querySelector("#div-ul");
let index = 0;
let question = [];
let nextBtn = document.querySelector("#nextBtn");
let totalMarks = 100;
let result = 0;


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


let renderData = (arr)=>{
  div.innerHTML="";
  let answer = [...arr[index].incorrect_answers, arr[index].correct_answer];


  div.innerHTML = `<h4>Q${index + 1}: ${arr[index].question}</h4>`;

    ul.innerHTML = `
      ${shuffleArray(answer).map(
        (items) => `
        <li class="list-none">
        <input type="radio" name="choice" class="choice" id=${items} value=${items}><label for=${items}>${items}</label>
        </li>`
      )}
      `;

}



        
nextBtn.addEventListener("click", () => {
  const choice = document.querySelectorAll(".choice");
  div.innerHTML = "";
  choice.forEach((item) => {
    if (item.checked) {
      if (item.nextSibling.innerHTML === question[index].correct_answer) {
        result += 10;
      }
    }
  });

  const ResultModal = document.querySelector('#result-modal');

  if (index < question.length - 1) {
    index += 1;
    renderData(question)
  } else {

     document.getElementById("popup").style.display = "flex";
  
   

   // Function to close the popup

 document.querySelector("#closePopup").addEventListener('click' , ()=>{

     document.getElementById("popup").style.display = "none";
   })
  
   const goResults = document.querySelector('#goToResults');
goResults.addEventListener('click' , ()=>{

   window.location = "result.html";

})
    localStorage.setItem(
      "cz",
      JSON.stringify({
        totalMarks,
        result,
      })
    );
  }
});

axios(
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
)
  .then((resp) => {
    question = resp.data.results;
    renderData(question)
  })

  .catch((err) => {
    console.log(err);
  });






  


 //Logout user


 const modal = document.getElementById("logoutModal");
 const logoutBtn = document.querySelector("#logout-btn");
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
    
     
     

     
  

     


      

       


  
 




  



  
       
         
 

   

  
   

  





  //On auth state change

  //user profile

  const profile = document.querySelector(".profile-pic");
  const profileName = document.querySelector("#modal-user-name");
  const userImage = document.querySelector('#modal-user-image');


  //Get userData from local storage


  let userData = JSON.parse(localStorage.getItem('data'));

  

onAuthStateChanged(auth, (user) => {
  if (user) {
    profile.src = `${user.photoURL}`;
    userImage.src=`${user.photoURL}`;
    profileName.innerHTML=`${user.displayName}`
    const uid = user.uid;
   
  console.log(uid);
  
   
  }else if(true){
    profile.src = "https://cdn-icons-png.flaticon.com/512/6325/6325109.png";
    userImage.src = "https://cdn-icons-png.flaticon.com/512/6325/6325109.png";
    profileName.innerHTML = `${userData[0].userName}`;


  }
   else {
    window.location="login in.html"
    
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const userProfile = document.getElementById("userProfile");
  const userModal = document.getElementById("userModal");
  const closeBtn = document.getElementById("closeBtn");

  userProfile.addEventListener("click", () => {
    userModal.classList.add("show");
    document.querySelector(".modal-content").classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    userModal.classList.remove("show");
    document.querySelector(".modal-content").classList.remove("show");
  });

  userModal.addEventListener("click", (e) => {
    if (e.target === userModal) {
      userModal.classList.remove("show");
      document.querySelector(".modal-content").classList.remove("show");
    }
  });
});