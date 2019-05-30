
let score = 0;
let current = 0;

/* ---------- START QUIZ ---------- */
function startQuiz () {
  $(".js-start-button").click(function(){
    $('.start-quiz').hide();
    $('.questionsForm').show();
    displayQuestion();
    console.log("Start Quiz button clicked");
  });
}

/* ---------- GENERATE QUESTIONS ---------- */
function displayQuestion(){
  if(current < myQuestions.length){
    let listQuestion = myQuestions[current];
    $('.questionsForm').html(`
    <p class="question-number js-question-number">Question Number: ${current + 1}/10</p>
    <p class="score js-score"> Score: ${score} </p>
    <h2 class="question js-question">${listQuestion.question}</h2>
    <form>
      <label class="answerOption">
      <input type="radio" id="0" name="answer" required>
      <span class="answerOptionText">${listQuestion.answers[0]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" id="1" name="answer" required>
      <span class="answerOptionText">${listQuestion.answers[1]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" id="2" name="answer" required>
      <span class="answerOptionText">${listQuestion.answers[2]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" id="3" name="answer" required>
      <span class="answerOptionText">${listQuestion.answers[3]}</span>
      </label>
    </form>
    <div class="submit">
        <button class="submit-button js-submit-button">Check Answer</button> 
    </div>
    `);
    $('.questionsForm').show();
    answerSelected();
    submitAnswer();
  } else {
    displayEndResult();
  }
}

/* ---------- SUBMIT BUTTON ---------- */
function submitAnswer(){
  $(".js-submit-button").click(function(event){
    if($('input.selected').length){
      let answer = $('input.selected').attr('id');
      checkAnswer(answer);
      $('.next').show();
      $('.submit').hide();
    } else {
      alert('Please select an answer');
    }
  });
}

/* ---------- CHECK ANSWER ---------- */
function checkAnswer(answer){
  let listQuestion = myQuestions[current];
  let answerCorrect = myQuestions[current].correct;
  if(listQuestion.correct == answer){
    score++;
    AnswerFeedbackCorrect();
  } else {
    AnswerFeedbackWrong();
  }
  $('.js-score').text('Current Score: '+score);
  current++;
}

/* ---------- DISPLAY FEEDBACK WHEN CORRECT ANSWER GIVEN ---------- */
function AnswerFeedbackCorrect () {
  $('.questionsForm').hide();
  $('.answerFeedBackForm').html(`
    <div class="correctFeedback">
      <p class="score js-score"> Score:  </p>
      <h2 class="feedBackText">Congratulations!<br>You got it right!</h2>
      <div class="next">
      <button class="next-button js-next-button">Next</button> 
      </div>
    </div>`);
    renderNextQuestion();
}

/* ---------- DISPLAY FEEDBACK WHEN WRONG ANSWER GIVEN ---------- */
function AnswerFeedbackWrong () {
  let correctAnswer = `${myQuestions[current].correctAnswer}`;
  $('.questionsForm').hide();
  $('.answerFeedBackForm').html(`
    <div class="wrongFeedback">
      <p class="score js-score"> Score:  </p>
      <h2 class="feedBackText">You got it wrong<br>The correct answer is:<span> ${correctAnswer}</span></h2>
      <div class="next">
      <button class="next-button js-next-button">Next</button> 
      </div>
    </div>`);
  renderNextQuestion();
}

/* ---------- NEXT BUTTON ---------- */
function renderNextQuestion () {
  $(".js-next-button").click(function(event){
    console.log("Next button clicked");
    displayQuestion();
    $('.next').hide();
    $('.submit').show();
  });
}

/* ---------- HIGHLIGHT ANSWER SELECTED ---------- */
function answerSelected(){
  $('form').on('click', 'input', function(event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });
  $('form').on('click', 'label', function(event) {
    $('.highlight').removeClass();
    $(this).addClass('highlight');
  });
}

/* ---------- DISPLAY THE RESULTS AT THE END ---------- */
function displayEndResult(){
  $('.questionsForm').hide();
  $('.resultsForm').show();
  $('.answerFeedBackForm').hide();
  if(score >= 8){
    $('.resultsForm').html(`
      <p class="end-score js-end-score">Your score is: ${score}/10</p>
      <p class="comment">GREAT JOB!</p>
      <button class="restart-button js-restart-button">RETAKE QUIZ</button>
    `);
  } else {
    $('.resultsForm').html(`
      <p class="end-score js-end-score">Your score is: ${score}/10</p>
      <p class="comment">YOU'LL DO BETTER NEXT TIME!</p>
      <button class="restart-button js-restart-button">RETAKE QUIZ</button>
    `);
  }
  restartQuiz ()
}

/* ---------- RESTART QUIZ BUTTON ---------- */
function restartQuiz () {
  $(".js-restart-button").click(function(){
  location.reload();
    console.log("Restart button clicked");
  });
}

function createQuiz () {
  startQuiz();
}

$(createQuiz);


/* ========================================================================== */
/*   QUESTIONS & ANSWERS                                                      */
/* ========================================================================== */


const myQuestions = [
	{
	 'question': 'Which supercar has 4 doors?',
	 'answers': ["Bentley Continental GT Speed","Ferrari FF","Aston Martin Rapide","Ford GT"],
   'correct': 2,
   'correctAnswer': "Aston Martin Rapide"
	},
	{
	 'question': 'How much horsepower does a 2012 Lamborghini Aventador have?',
	 'answers': ["700", "800", "600", "500"],
   'correct':  0,
   'correctAnswer': "700"
	},
	{
	 'question': "Which supercar has the quickest 0-60 time?",
	 'answers': ["Bugatti Veyron","Ferrari LaFerrari","McLaren P1","Ariel Atom 3"],
   'correct':  3,
   'correctAnswer': "Ariel Atom 3"
	},
	{
	'question': "What is the Ferrari Enzo is named after?",
	'answers': ["The car's designer","The founder of Ferrari","The Italian town where the founder first raced","The Ferrari proving grounds (race track)"],
  'correct':  1,
  'correctAnswer': "The founder of Ferrari"
	},
	{
	'question': "Which supercar seats more that 2 occupants?",
  'answers': ["McLaren F1", "Koenigsegg CCX", "Ferrari Enzo" , "Porsche Carrera GT"],
  'correct': 0,
  'correctAnswer': "McLaren F1"
	},
	{
	 'question': "Which American supercar set a new top speed world record of 270.49 mph on February 14, 2014?",
	 'answers': ["SSC Ultimate Aero","Mosler MT900","Hennessey Venom GT","SRT Viper Time Attack"],
   'correct': 2,
   'correctAnswer': "Hennessey Venom GT"
	},
	{
	 'question':"The Bugatti Veyron burns how many gallons of gasoline each hour?",
	 'answers': ["100", "40", "80", "20"],
   'correct': 2,
   'correctAnswer': "80"
	},
	{
	 'question':"Which of the following can the Caparo T1 not do?",
	 'answers': ["Drive legally on the road", "Drive through a tunnel upside down", "Reach speeds of 60 mph (97 kph) in under two seconds", "All of the above"],
   'correct':  2,
   'correctAnswer': "Reach speeds of 60 mph (97 kph) in under two seconds"
	},
	{
	 'question':"Which German car manufacturer has owned Lamborghini since 1998?",
	 'answers': ["BMW", "Audi", "Porsche", "Mercedes-Benz"],
   'correct': 1,
   'correctAnswer': "Audi"
	},
	{
	 'question': "Ford’s GT40 was conceived to beat Ferrari at Le Mans. It did so – but how many times did it win overall?",
	 'answers': ["2", "3", "4", "5"],
   'correct': 2,
   'correctAnswer': "4"
	}
	];
