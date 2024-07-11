let resultData = JSON.parse(localStorage.getItem('cz'))

console.log(resultData);

let marks = document.querySelector("#marks")


// Get references to the HTML elements
let resultCard = document.getElementById('result-card');
let resultMessage = document.getElementById('result-message');
let resultDescription = document.getElementById('result-description');

// Set the content based on the quiz result



if (resultData.result >=40) {
  resultCard.classList.add("passed");
  resultMessage.textContent = "Congratulations!";
  resultDescription.textContent = "You passed the quiz.";
  marks.innerHTML=`Your Score:${resultData.result}/100`;
  
  
} else {
   resultCard.classList.add("failed");
   resultMessage.textContent = "Sorry, you failed.";
   resultDescription.textContent = "Please try again.";
    marks.innerHTML = `Your Score: ${resultData.result}/100`;    
}



const againQuiz = document.querySelector("#again-quiz");


againQuiz.addEventListener('click' , ()=>{

  window.location="quiz app.html";

})










