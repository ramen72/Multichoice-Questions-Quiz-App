const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2,
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: 3,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats",
      ],
      correct: 1,
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "Hypertext Markdown Language",
        "Hyperloop Machine Language",
        "Helicopters Terminals Motorboats Lamborghinis",
      ],
      correct: 0,
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "None of the above"],
      correct: 1,
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const question = document.querySelector(".question");
  const answers = document.querySelector(".answers");
  const queTime = document.querySelector("#queTime");

  // Button Select
  const quizAppStart = document.getElementById("quizAppStart");
  const submitBtn = document.getElementById("submit");

  const result = document.getElementById("result");
  const score = document.getElementById("score");
  
  let currentQuestion = 0;
  let scoreCount = 0;
  const examTime = 20000;
  
  function loadQuiz() {
    quizAppStart.style.display = "none"
    submitBtn.style.display = "block"
    const currentQuizData = quizData[currentQuestion];
    question.innerText = currentQuizData.question;
    answers.innerHTML = "";
  
    currentQuizData.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="radio" name="answer" id="option${index}" value="${index}">
        <label for="option${index}">${option}</label>
      `;
      answers.appendChild(li);
    });
    setTimeout(timeOutMessage,examTime)
  }
  
  function getSelected() {
    const answers = document.querySelectorAll("input[name='answer']");
    let selectedOption = null;
  
    answers.forEach((answer) => {
      if (answer.checked) {
        selectedOption = parseInt(answer.value);
      }
    });
  
    return selectedOption;
  }
  
  function submitItem(){
    const selectedOption = getSelected();  
    if (selectedOption === null) {
      alert("Please select an answer!");
      return;
    }  
    if (selectedOption === quizData[currentQuestion].correct) {
      scoreCount++;
    }  
    currentQuestion++;  
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.classList.add("hidden");
      result.classList.remove("hidden");
      submitBtn.style.display = "none";
      queTime.style.display = "none"
      score.innerText = scoreCount;
    }
  }
  
  // Time Out Function
  function timeOutMessage() {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    submitBtn.style.display = "none";
    queTime.style.display = "none"
    score.innerText = scoreCount;
  }
  submitBtn.addEventListener("click",submitItem)
  quizAppStart.addEventListener("click",loadQuiz)
