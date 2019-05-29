
/* ========================================================================== */
/*   START QUIZ                                                              */
/* ========================================================================== */


let score = 0;
let current = 0;

/* ---------- QUIZ FUNCTIONS ---------- */
$(document).ready(function(){
    /* ---------- START QUIZ ---------- */
  $(".js-start-button").click(function(){
     $('.start-quiz').hide();
     $('.next').hide();
     $('.questions').show();
     displayQuestion();
      $('.js-score').text('Current Score: '+score);
    console.log("Start Quiz button clicked");
  });
  
    /* ---------- NEXT BUTTON ---------- */
  $(".js-next-button").click(function(event){
    console.log("Next button clicked");
    displayQuestion();
    $('.next').hide();
    $('.submit').show();
  });
  
  /* ---------- SUBMIT BUTTON ---------- */
  $(".js-submit-button").click(function(event){
    if($('li.selected').length){
      let answer = $('li.selected').attr('id');
      checkAnswer(answer);
      $('.next').show();
      $('.submit').hide();
    } else {
      alert('Please select an answer');
    }
  });
  
  /* ---------- RESTART QUIZ BUTTON ---------- */
  $(".js-restart-button").click(function(){
  location.reload();
    console.log("Restart button clicked");
  });
  
  /* ---------- ANSWER SELECTED ---------- */
  $('ul.list').on('click', 'li', function(event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });
  
});

/* ---------- GENERATE QUESTIONS ---------- */
function displayQuestion(){
  $('.js-question-number').text('Question Number: '+(current + 1)+"/10" );
  if(current < myQuestions.length){
    let listQuestion = myQuestions[current];
    $('h2').text(listQuestion.question);
    $('ul.list').html('');
    for (let i = 0; i < listQuestion.answers.length; i++) {
      $('ul.list').append('<li id = "'+i+'">'+listQuestion.answers[i] +'</li>');
    }
  } else {
    displayScore();
  }
}

/* ---------- CHECK ANSWER ---------- */
function checkAnswer(answer){
  let listQuestion = myQuestions[current];
  let answerCorrect = myQuestions[current].correct;
  if(listQuestion.correct == answer){
    score++;
    $('li.selected').addClass('correct');
  } else {
    $('li.selected').addClass('incorrect');
    $('li#'+listQuestion.correct).addClass('correct');
  }
  $('.js-score').text('Current Score: '+score);
  current++;
}

/* ---------- UPDATE SCORE ---------- */
function displayScore(){
  $('.questions').hide();
  $('.end-quiz').show();
  $('.js-end-score').text("Your score is: " +score + '/10');
  if(score >= 8){
    $('.js-comment').text('GREAT JOB!');
  } else {
    $('.js-comment').text("YOU'LL DO BETTER NEXT TIME!");
  }
}


/* ========================================================================== */
/*   QUESTIONS & ANSWERS                                                      */
/* ========================================================================== */


const myQuestions = [
	{
	 'question': 'Which supercar has 4 doors?',
	 'answers': ["Bentley Continental GT Speed","Ferrari FF","Aston Martin Rapide","Ford GT"],
	 'correct': 2
	},
	{
	 'question': 'How much horsepower does a 2012 Lamborghini Aventador have?',
	 'answers': ["700", "800", "600", "500"],
	 'correct':  0
	},
	{
	 'question': "Which supercar has the quickest 0-60 time?",
	 'answers': ["Bugatti Veyron","Ferrari LaFerrari","McLaren P1","Ariel Atom 3"],
	 'correct':  3
	},
	{
	'question': "What is the Ferrari Enzo is named after?",
	'answers': ["The car's designer","The founder of Ferrari","The Italian town where the founder first raced","The Ferrari proving grounds (race track)"],
	'correct':  1
	},
	{
	'question': "Which supercar seats more that 2 occupants?",
  'answers': ["McLaren F1", "Koenigsegg CCX", "Ferrari Enzo" , "Porsche Carrera GT"],
	'correct': 0
	},
	{
	 'question': "Which American supercar set a new top speed world record of 270.49 mph on February 14, 2014?",
	 'answers': ["SSC Ultimate Aero","Mosler MT900","Hennessey Venom GT","SRT Viper Time Attack"],
	 'correct': 2
	},
	{
	 'question':"The Bugatti Veyron burns how many gallons of gasoline each hour?",
	 'answers': ["100", "40", "80", "20"],
	 'correct': 2
	},
	{
	 'question':"Which of the following can the Caparo T1 not do?",
	 'answers': ["drive legally on the road", "drive through a tunnel upside down", "reach speeds of 60 mph (97 kph) in under two seconds.", "All of the above"],
	 'correct':  2
	},
	{
	 'question':"Which German car manufacturer has owned Lamborghini since 1998?",
	 'answers': ["BMW", "Audi", "Porsche", "Mercedes-Benz"],
	 'correct': 1  
	},
	{
	 'question': "Ford’s GT40 was conceived to beat Ferrari at Le Mans. It did so – but how many times did it win overall?",
	 'answers': ["2", "3", "4", "5"],
	 'correct': 2
	}
	];
