$(function() {

// make question object with answer property
	function makeQ(question, answer, number) {
	    var q = {};
	    q.question = question; 
	    q.answer = answer;
	    q.number = number;
	    q.getAnswer = function() {
	        return this.answer;
	    };
	    return q;
	};

						// MAKING QUESTIONS AND ANSWERS


//setting questions
var first = makeQ("What temperature basking spot does a ball python need?", "90 deg", 1),
 second = makeQ("What is the minimum humidity that a ball python needs?", "50%", 2),
 third = makeQ("Why is humidity so important for ball pythons?", "It helps them stay hydrated and to shed well", 3),
 fourth = makeQ("How large can an adult female ball python get?", "5 feet", 4),
 fifth = makeQ("What is the average lifespan of a pet BP?", "30 years", 5),
 sixth = makeQ("What kind of food do they eat?", "Mice and rats, preferably frozen/thawed", 6),
  seventh = makeQ("How often should they be fed?", "About once per week", 7),
 eighth = makeQ("How big should their food be?", "As large as the largest part of their body", 8),
 ninth = makeQ("How long should you avoid handling them after they've eaten?", "About 48 hours", 9),
 tenth = makeQ("What is the minimum cage size for an adult BP?", "40 gal", 10);

// setting answers
var answers1 = ["90 deg", "85 deg", "80 deg", "95 deg"],
	answers2 = ["50%", "60%", "30%", "20%"],
	answers3 = ["It helps them stay hydrated and to shed well", "It's not that important", "They live in bogs in the wild",
			"So their slime coating never dries out"],
	answers4 = ["5 feet", "10 feet", "15 feet", "3 feet"],
	answers5 = ["2 years", "5 years", "15 years", "30 years"],
	answers6 = ["Mice and rats, preferably frozen/thawed", "Bugs and small frogs", "Mice and rats, always live", 
			"Prepared snake diet"],
	answers7 = ["About once per week", "Usually twice per week", "Daily", "About once per month"],
	answers8 = ["As large as the largest part of their body", "The biggest you can find", "As big as their head", "They can eat anything"],
	answers9 = ["About 24 hours", "About a week", "About 48 hours", "As long as it takes them to eat their food"],
	answers10 = ["40 gal", "30 gal", "80 gal", "10 gal"];

// making array of all questions and answers
var allQ = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth];
var allAns = [answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10];



								//SETTING GLOBAL VARIABLES

// iQ is the question number we are currently on (or its position in the array, anyway.)
// we need to set it globally so each instance of question answering increments it
var iQ = 0,

// this says, 'current question/answer is number 1!'.  It will increment after every answered question.
currentQ = allQ[iQ],
currentA = allAns[iQ],

numCorrect = 0,
total = iQ,
percentCorrect = numCorrect/total;

// shortcut variables
$yesBut = $('.yesbutton'),
$ans = $('.answers'),
$this = $(this),
$pC = $('.percentCorrect'),
$bar = $('.bar'),
$fraction = $('.fraction'),
$percent = $('.percent'),
$statusBar = $('.statusBar');
$question = $('.beginQuestion');

								// MAKING FUNCTIONS

// shuffles any array.  Made to shuffle around the answers but could also be used to shuffle qs if I want
function shuffle(array) {
	array.sort(function() { return 0.5 - Math.random() });
};

// gets rid of the old answer boxes so I can make new ones
function clear() {
	$('.answerbox').remove();
};

// give me the next question!
function nextQ() {
	if (iQ <= allQ.length) {
		$('.beginQuestion').text(currentQ.question);
	};

};

// give me the next answers!
function nextA() {
	if (iQ <= allAns.length) {
		clear();
		shuffle(currentA);
		var i = 0;
		while (i < 4) {
			$ans.append('<button class="answerbox">' + currentA[i] + '</button>');
			i++;
		};	
	};
};



//We want to run this every time a question is answered
function update() {
	$fraction.text(iQ + '/10');
	$percent.text(percentCorrect + '%');
	
		// changes the color of the background depending on the percent
};

function lastUpdate() {
	$percent.text(percentCorrect + '%');
};

var delay;

//we want this to be separate from main update so that  it starts as soon as you click your answer
function barUpdate() {
	// changes the color of the background depending on the percent
	if (Math.abs(($bar.width()/$statusBar.width()) - percentCorrect) == 100 ) {
		if (percentCorrect >= 65 || percentCorrect == NaN) {
			$bar.animate({
				backgroundColor: 'green',
				width: percentCorrect + '%'
			}, 2000);
		}
		else if (percentCorrect <= 65 && isNaN(percentCorrect) != true) {
			$bar.animate({
			backgroundColor: '#e13261',
			width: percentCorrect + '%'}, 2000);
			};
			delay = 2000;
		}
	else if (Math.abs(($bar.width()/$statusBar.width()) - percentCorrect) >= 30) {
		if (percentCorrect >= 65 || percentCorrect == NaN) {
			$bar.animate({
				backgroundColor: 'green',
				width: percentCorrect + '%'
			}, 1000);
		}
		else if (percentCorrect <= 65 && isNaN(percentCorrect) != true) {
			$bar.animate({
			backgroundColor: '#e13261',
			width: percentCorrect + '%'}, 1000);
			};
			delay = 1000;
		}
	else if (Math.abs(($bar.width()/$statusBar.width()) - percentCorrect) >= 10) {
		if (percentCorrect >= 65 || percentCorrect == NaN) {
			$bar.animate({
				backgroundColor: 'green',
				width: percentCorrect + '%'
			}, 600);
		}
		else if (percentCorrect <= 65 && isNaN(percentCorrect) != true) {
			$bar.animate({
			backgroundColor: '#e13261',
			width: percentCorrect + '%'}, 600);
			};
			delay = 600;
		}
		
	else  {
		if (percentCorrect >= 65 || percentCorrect == NaN) {
			$bar.animate({
				backgroundColor: 'green',
				width: percentCorrect + '%'
			}, 200);
		}
		else if (percentCorrect <= 65 && isNaN(percentCorrect) != true) {
			$bar.animate({
			backgroundColor: '#e13261',
			width: percentCorrect + '%'}, 200);
			};
			delay = 200;
		};
};

// for the beginning, when the NaN is confusing, just set the problematic things to be zero
function setZero() {
	$percent.text('0%');
	$bar.css({'width': 0});
};


//this makes the new question/new answer appear!  Unfortunately I was not able to implement it in
// the actual answering of the questions, so for now it only works with the yesbutton
function moveOn(div, clickable) {
	$(div).on('click', clickable, function() {
		nextQ();
		nextA();
		if ($yesBut.show()) {
		$yesBut.hide();
		$('.answers').show();
	};

//this is where iQ is incremented after pressing the "yes" button.  
	iQ++;
	update();
	setZero();
	});
};

//this is the function with which we tell the currentQ/currentA that they need to change
function setCurrent() {
		currentQ = allQ[iQ];
		currentA = allAns[iQ];
		total = iQ;
		percentCorrect = parseInt((numCorrect/total)*100);
};

function hideAll() {
	$question.hide();
	clear();
};

//should set everything back to zero again??

function reset() {
	iQ = 0;
	total = iQ;
	numCorrect = 0;
	$('.explanationBlock').text('');
	update();
	setCurrent();
	setZero();
	barUpdate;
};

// want the change to take a bit so you can see whether your answer is correct or not
function delayedQ() {window.setTimeout(nextQ, delay + 200)};
function delayedA() {window.setTimeout(nextA, delay + 200)};
function delayedUpdate() {window.setTimeout(update, delay + 200)};
function delayedHide() {window.setTimeout(hideAll(), 400)};



//assigns 'moveOn' function to yesbutton
moveOn('.content', '.yesbutton');




	

// validates answer when you click, makes the answer button green and stuff
	$ans.on('click', '.answerbox', function isCorrect() {
		$('.explanationBlock').text('');
		if (iQ < 10) {
			if ($(this).text() == currentQ.answer) {
			$(this).css({'background-color': 'green', 'color': 'white'})
					.text('CORRECT!');
			numCorrect++;
		}
			else {
				$(this).css({'background-color': 'red'})
						.text('INCORRECT :(');
				$('.explanationBlock').text('Correct Answer: ' + currentQ.answer);
			};
			$('.answerbox').css({'pointer-events': 'none'});
			setCurrent();
			barUpdate();
			delayedQ();
			delayedA();
			iQ++;
			delayedUpdate();
	}
		else {
			setCurrent();
			barUpdate();
			delayedHide();
			if (percentCorrect >= 65) {
				$question.text("Congratulations!  You got " + percentCorrect + "%" + " correct!");
					}
			else {
				$question.text("You only got " + percentCorrect + "% correct :(.  Sounds like you have a bit of learning to do!");
					};
			$question.show();
			$ans.append('<button class="answerbox toInfo">' + 'Click here to learn more!' + '</button>');
			$ans.append('<button class="answerbox tryAgain">' + 'Click here to try again!' + '</button>');

			$ans.on('click', '.toInfo', function() {
				event.preventDefault();
			});

			$ans.on('click', '.tryAgain', function() {
				reset();
				
			});
		};
	});


});



