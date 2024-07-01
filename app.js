const firstName = document.getElementById("floating_first_name");
const lastName = document.getElementById("floating_last_name");
const email = document.getElementById("floating_email");
const password = document.getElementById("floating_password");
const confirmPassword = document.getElementById("floating_repeat_password");
const btn = document.getElementById("SubmitButton");

 btn.addEventListener('click' , (event)=>{

   event.preventDefault();

  //------------ Regex Validations started --------------//

   let firstNamePattern = /^[A-Za-z][A-Za-z'-]{1,}$/;
   let lastNamePattern = /^[A-Za-z'-]{2,50}$/;
   let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

   if (
     emailPattern.test(email.value) &&
     passwordPattern.test(password.value) &&
     firstNamePattern.test(firstName.value) &&
     lastNamePattern.test(lastName.value)
     ) {
    var modal = document.getElementById("successModal");
    modal.style.display = "block";

    // Close the modal when the user clicks on the close button or the "Close" button
    var closeBtn = document.querySelector(".close");
    var closeModalBtn = document.getElementById("closeBtn");

    closeBtn.onclick = function () {
      modal.style.display = "none";
      window.location = "login in.html";
    };
   

    closeModalBtn.onclick = function () {
      modal.style.display = "none";
      window.location = "login in.html";
    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
     let userData = [
       {
         userName: firstName.value + " " + lastName.value,
         userEmail: email.value,
         password: password.value,
       },
     ];

     localStorage.setItem("data", JSON.stringify(userData));

    
   } else if (email.value === "") {
     alert("Please Enter Email Address!");
   } else {
     alert("Some problem in the form");
   }



   //---------------- Regex Validations Ended -----------------//



  //-------- Store User data in Array of Object into local storage---------

  //  window.location='login in.html'













  

  



});








 
   
 