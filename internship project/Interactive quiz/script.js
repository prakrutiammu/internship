const quizData = [
    {
      question: "What is the capital of France?",
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Rome",
      correct: "c",
    },
    {
      question: "Who is the author of *Harry Potter*?",
      a: "J.R.R. Tolkien",
      b: "J.K. Rowling",
      c: "George R.R. Martin",
      d: "Suzanne Collins",
      correct: "b",
    },
    {
      question: "What is the largest planet in our solar system?",
      a: "Earth",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn",
      correct: "c",
    },
    {
        question:"How many hours are there un a day?",
     a:"48",
     b:"24",
     c:"12",
     d:"8",
     correct:"b",

    },
       {

        question:"Which animal is known as Ship of desert?",
        a:"Camel",
        b:"Horse",
        c:"dog",
        d:"Deer",
        correct:"a",
    
       },
  ];
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  const resultContainer = document.getElementById("result");
  
  function loadQuiz() {
    quizData.forEach((item, index) => {
      const questionElement = document.createElement("div");
      questionElement.innerHTML = `
        <div class="question">${index + 1}. ${item.question}</div>
        <div class="answers">
          <label><input type="radio" name="q${index}" value="a"> ${item.a}</label><br>
          <label><input type="radio" name="q${index}" value="b"> ${item.b}</label><br>
          <label><input type="radio" name="q${index}" value="c"> ${item.c}</label><br>
          <label><input type="radio" name="q${index}" value="d"> ${item.d}</label>
        </div>
      `;
      quizContainer.appendChild(questionElement);
    });
  }
  
  function calculateScore() {
    let score = 0;
    quizData.forEach((item, index) => {
      const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === item.correct) {
        score++;
      }
    });
    return score;
  }
  
  submitButton.addEventListener("click", () => {
    const score = calculateScore();
    resultContainer.textContent = `You scored ${score} out of ${quizData.length}`;
  });
  
  loadQuiz();
  