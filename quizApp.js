const quiz = document.querySelector("#quiz");
axios(
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
)

.then((resp)=>{
    console.log(resp.data.results);
    resp.data.results.map((item)=>{
        let answer = [item.correct_answer , ...item.incorrect_answers];
        quiz.innerHTML += `<h4>${item.question}</h4>
        <div class="list-none">
    <li>
        <input type="radio" id="option1" value="" > <label for="option1">${answer[0]}</label>
    </li>

     <li>
        <input type="radio" value="" > <label for="option1">${answer[1]}</label>
    </li>

     <li>
        <input type="radio" value="" > <label for="option1">${answer[2]}</label>
    </li>

     <li>
        <input type="radio" value="" > <label for="option1">${answer[3]}</label>
    </li>
  </div><hr/>`;

    })

})
.catch((err)=>{
    console.log(err);

})