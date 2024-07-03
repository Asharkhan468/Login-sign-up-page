const firstName = document.getElementById("floating_first_name");
const lastName = document.getElementById("floating_last_name");
const email = document.getElementById("floating_email");
const password = document.getElementById("floating_password");
const confirmPassword = document.getElementById("floating_repeat_password");
const btn = document.getElementById("SubmitButton");


//Error message started //

const firstNameError = document.getElementById("firstNameError");
const LastNameError = document.getElementById("LastNameError");
const RegEmailError = document.getElementById("RegEmailError");
const RegPasswordError = document.getElementById("RegPasswordError");
const RegConfPasswordError = document.getElementById("RegConfPasswordError");

//Error message ended //


 btn.addEventListener('click' , (event)=>{

   event.preventDefault();

  //------------ Regex Validations started --------------//

   let firstNamePattern = /^[A-Za-z][A-Za-z'-]{1,}$/;
   let lastNamePattern = /^[A-Za-z'-]{2,50}$/;
   let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   let passwordPattern = /^(?=.*\d)[a-z\d!@#$%^&*()\-_=+{};:,<.>]{1,12}$/;


   if (
     emailPattern.test(email.value) &&
     passwordPattern.test(password.value.toLowerCase()) &&
     firstNamePattern.test(firstName.value) &&
     lastNamePattern.test(lastName.value) && password.value===confirmPassword.value
   ) {
    firstNameError.innerHTML=""
    LastNameError.innerHTML=""
    RegEmailError.innerHTML=""
    RegPasswordError.innerHTML=""
    RegConfPasswordError.innerHTML=""
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

     //-------- Store User data in Array of Object into local storage---------

     let userData = [
       {
         userName: firstName.value + " " + lastName.value,
         userEmail: email.value,
         password: password.value,
       },
     ];

     localStorage.setItem("data", JSON.stringify(userData));
   } else if (email.value == "") {
     RegEmailError.innerHTML=""
     RegEmailError.innerHTML="Email is Required"

   } else if(password.value == "") {
    RegPasswordError.innerHTML = "";
    RegPasswordError.innerHTML = "Password is Required";
     
   }else if(confirmPassword.value !== password.value && confirmPassword.value !== "" ){

    RegConfPasswordError.innerHTML="";
    RegConfPasswordError.innerHTML="Password Do not match";

   }else if((email.value == "" && password.value == "")){

    RegEmailError.innerHTML = "";
    RegEmailError.innerHTML = "Email is Required";

    RegPasswordError.innerHTML = "";
    RegPasswordError.innerHTML = "Password is Required";

   }else if(firstName.value =="" && lastName.value == ""){
    firstNameError.innerHTML="";
    firstNameError.innerHTML = "This is Required";

    LastNameError.innerHTML = ""
    LastNameError.innerHTML = "This is Required"

   }else if(confirmPassword.value == ""){
    RegConfPasswordError.innerHTML="Confirm Password is Required"
   }



   //---------------- Regex Validations Ended -----------------//

















  

  



});

 
   
 