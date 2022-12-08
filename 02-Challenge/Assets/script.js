// list of all questions, choices, and answers
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];

  var currentIndex = 0
  var time = 60
  var timerInterval;
  var questionsEl = document.querySelector("#questions")
  var questionsTitleEl = document.querySelector("#question-title")
  var choicesEl = document.querySelector("#choices")
  var endEl = document.querySelector("#end-screen")
  var finalScoreEl = document.querySelector("#final-score")
  var initialsBtn = document.querySelector("#submit")
  var startEl = document.querySelector("#start-screen")
  var startBtn = document.querySelector("#start")
  var feedbackEl = document.querySelector("#feedback")
  var highscoresEl = document.querySelector("#high-scores")
  var scoresEl = document.querySelector("#scores")
  var timeRemainingEl = document.querySelector("time-remaining")

  function startQuiz(){
    startEl.classList.add("hide")
    questionsEl.classList.remove("hide")
    timerInterval = setInterval(countdown,1000)
    timeRemainingEl.textContent = time
    showQuestion()
  }

  function countdown(){
    time --
    timeRemainingEl.textContent = time
    if (time <= 0){
       endQuiz() 
    }
  }

  function showQuestion(){
    questionsEl.innerHTML = ""
    questionsTitleEl.textContent = questions[currentIndex].title
    for (let i = 0; i < questions[currentIndex].choices.length; i++) {
    var choiceBtn = document.createElement("button")
    choiceBtn.textContent = questions[currentIndex].choices[i]
    choiceBtn.setAttribute("value", questions[currentIndex].choices[i])
    choiceBtn.onclick = checkAnswer
    choicesEl.append(choiceBtn)
    }
  }

  function checkAnswer (){
    if (this.value !== questions[currentIndex].answer) {
        time -=10 
        timeRemainingEl.textContent = time
        if (time <=0) {
            endQuiz()
            
        }
        
    }
    else{

    }
    currentIndex++
    if (currentIndex >=questions.length) {
        endQuiz()
    }
    showQuestion()
  }

  function endQuiz (){
    
  }

  startBtn.addEventListener("click",startQuiz)
