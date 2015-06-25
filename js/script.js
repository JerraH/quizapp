$(function() {
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

var allQ = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth];
var allAns = [answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10];



// setting variables to refer to the array of questions and of answers
// iQ must start at 0 to be used in the nextQ and nextA functions	
var iQ = 0,
currentQ = allQ[iQ],
currentA = allAns[iQ],
$yesBut = $('.yesbutton'),
$ans = $('.answers'),
$this = $(this);


// this function sets the text of 'question' to be the next question in line
function nextQ() {
	if (iQ < allQ.length) {
		$('.question').text(currentQ.question);
	};

};

function shuffle(array) {
	array.sort(function() { return 0.5 - Math.random() });
};

function clear() {
	$('.answerbox').remove();
};


function nextA() {
	if (iQ < allAns.length) {
		clear();
		shuffle(currentA);
		var i = 0;
		while (i < 4) {
			$ans.append('<button class="answerbox">' + currentA[i] + '</button>');
			i++;
		};	
	};
};



function moveOn(div, clickable) {
	$(div).on('click', clickable, function() {
		nextQ();
		nextA();
		if ($yesBut.show()) {
		$yesBut.hide();
		$('.beginQuestion').hide();
		$('.question').show();
		$('.answers').show();
	};
	iQ++;
	});
console.log(iQ);
};


moveOn('.content', '.yesbutton');


	

// var nextQ = currentQ's position in allQ + 1 
	$ans.on('click', '.answerbox', function() {
		if ($(this).text() == currentQ.answer) {
			alert('Correct!');
		}
		else {
			alert('Incorrect :(');
		};
		console.log('prior to next increment, ' + iQ + ' is iQ.');
		currentQ = allQ[iQ];
		currentA = allAns[iQ];
		nextQ();
		nextA();
		iQ++;
		console.log(iQ);
		

	});


	});



