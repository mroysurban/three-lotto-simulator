window.onload = function () {
	var winning_digits = [];
	var bet_digits = [];
	var interval_time = 500; // time to generate next winning numbers in milliseconds

	var bet_container_id = ["first-bet", "second-bet", 'third-bet'];
	var winning_container_id = ["first-winning", "second-winning", 'third-winning'];

	init();

	function init () {		
		// var draw_lottery = setInterval(function () {

			if (checkWinner()) {
				clearInterval(draw_lottery);
				alert("you won!")
			}
			else {
				bet_digits = [];
				drawNumbers();
			}
		// }, interval_time);
	}

	function checkWinner () {
		 return false;
	}

	function drawNumbers () {
		winning_container_id.forEach( function(element_id) {
			generateWinningNumbers(element_id);
		});
	}

	function generateWinningNumbers (element_id) {
		var winning_number = pickRandomNumber();
		winning_digits.push(winning_number);
		var number_node = document.createTextNode(winning_number);
		document.getElementById(element_id).appendChild(number_node);
	}

	function pickRandomNumber () {
		 var random_zero_to_nine = parseInt(Math.floor((Math.random() * 10)));
		 return random_zero_to_nine;
	}

}