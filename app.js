const firstName = document.getElementById("floating_first_name");
const lastName = document.getElementById("floating_last_name");
const email = document.getElementById("floating_email");
const password = document.getElementById("floating_password");
const confirmPassword = document.getElementById("floating_repeat_password");
const btn = document.getElementById("SubmitButton");

 btn.addEventListener('click' , (event)=>{
   event.preventDefault();

 let userData = [{
      userName:firstName.value,
      userEmail: email.value,
      password: password.value
   }];

   localStorage.setItem('data' , JSON.stringify(userData));


});




 
   
 