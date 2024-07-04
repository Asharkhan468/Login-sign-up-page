const quiz = document.querySelector("#quiz");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const btnSubmit = document.querySelector("#btn-submit"); 
const option = document.getElementsByName("option");
axios(
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
)

.then((resp)=>{
    console.log(resp.data.results);
    resp.data.results.map((item)=>{
        let answer = [item.correct_answer , ...item.incorrect_answers];
        quiz.innerHTML += `<h4>${item.question}</h4>
        <form class="list-none">
    <li>
        <input type="radio" id="option1" value="${answer[0]}" > <label name="option">${answer[0]}</label>
    </li>

     <li>
        <input type="radio" id="option2" value="${answer[1]}" > <label name="option">${answer[1]}</label>
    </li>

     <li>
        <input type="radio" id="option3" value="${answer[2]}" > <label name="option">${answer[2]}</label>
    </li>

     <li>
        <input type="radio" id="option4" value="${answer[3]}" > <label name="option">${answer[3]}</label>
    </li>
  </form><hr/>`;


    })

})
.catch((err)=>{
    console.log(err);

})

btnSubmit.addEventListener('click' , (event)=>{
    
})




