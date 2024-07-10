
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


// localStorage.getItem('')







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

  // shuffleArray(answer).map((item)=>{
  //    ul.innerHTML = `<li class="list-none">
  //       <input type="radio" name="choice" class="choice" id=${item} value=${item}><label for=${item}> ${item}</label>
  //       </li>`;


  // })

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

  if (index < question.length - 1) {
    index += 1;
    renderData(question)
  } else {
    alert("Go to Result");
    window.location = "result.html";
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
    console.log(resp.data.results);
    question = resp.data.results;
    renderData(question)
  })

  .catch((err) => {
    console.log(err);
  });






  //footer started

  document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById("homeButton");
    const categoriesButton = document.getElementById("categoriesButton");
    const profileButton = document.getElementById("profileButton");

    homeButton.addEventListener("click", () => {
      // Logic to navigate to home
      alert("Home button clicked");
    });

    categoriesButton.addEventListener("click", () => {
      // Logic to navigate to categories
      alert("Categories button clicked");
    });

    profileButton.addEventListener("click", () => {
      // Logic to navigate to profile
      alert("Profile button clicked");
    });
  });



  //footer ended


