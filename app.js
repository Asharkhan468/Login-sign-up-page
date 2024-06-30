const firstName = document.querySelector("#FirstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const confirmPassword = document.querySelector("#Confirm password");
const btn = document.querySelector("#btn-Submit");

 btn.addEventListener("click", function(event) {
    const email = document.querySelector("#Email");
    const password = document.querySelector("#Password");

     event.preventDefault();
     
     let userData={
     userEmail:email.value,
        password:password.value
     }

     console.log(userData);
    
    });

