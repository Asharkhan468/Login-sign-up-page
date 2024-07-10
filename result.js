let resultData = JSON.parse(localStorage.getItem('result'))

console.log(resultData);

const marks = document.querySelector("#marks");

marks.innerHTML=`Your Score: ${resultData.result} / 100`

// Get the modal
var modal = document.getElementById("passModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-1")[0];

// Function to display the modal
function showModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}















// Get the modal
var modal = document.getElementById("failModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to display the modal
function showModalFail() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}























if (resultData.result >=40) {
  window.onload = function() {
    showModal();
  }
} else {
    
        showModalFail();
      
    
}










// if(resultData.result >= 40){
//     console.log("Congratulation you are passed");
// }else{
//     console.log("Malik fail hogye app!");
// }

