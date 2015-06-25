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

 var allQ = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth];


console.log(first.answer);

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

var allAns = [answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10];
	

	function nextQ() {
		for (var i = 0; i < allQ.length; i++) { 
			$('.question').text(allQ[i].question)
		};
	};

	var $ansbox = $('.answerbox'),
	$this = $('this');


	$('.yesbutton').mousedown(function() {
		$('.question').show();
		$('.answers').show();
		$ansbox.show();
		$('.yesbutton').hide();
		$('.beginQuestion').hide();
			nextQ();
			$ansbox.each(function(i) {
				$this.text((allAns[0])[i]);
				console.log((allAns[0])[i] )
				i++;
			});

	});

var currentQ = first;
// var nextQ = currentQ's position in allQ + 1 
	$('.answers').on('click', '.answerbox', function() {
	


		var chosen = $('this').find('p').val();
		if (chosen == currentQ.answer) {
			console.log("Correct!");
		}
		else {
			console.log("Wrong!");
};
		$('.question').text(nextQ.question);
		// currentQ = position in allQ + 1

		
	});
	});



