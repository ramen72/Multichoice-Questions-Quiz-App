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
  const questionEl = document.querySelector(".question");
  const answersEl = document.querySelector(".answers");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    answersEl.innerHTML = "";
  
    currentQuizData.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="radio" name="answer" id="option${index}" value="${index}">
        <label for="option${index}">${option}</label>
      `;
      answersEl.appendChild(li);
    });
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
  
  submitBtn.addEventListener("click", () => {
    const selectedOption = getSelected();
  
    if (selectedOption === null) {
      alert("Please select an answer!");
      return;
    }
  
    if (selectedOption === quizData[currentQuestion].correct) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.classList.add("hidden");
      resultEl.classList.remove("hidden");
      scoreEl.innerText = score;
    }
  });
  
  loadQuiz();
  