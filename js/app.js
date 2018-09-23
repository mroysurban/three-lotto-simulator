// window.onload = function () {
  // var bet_digits = [3, 4, 5];
  let bet_digits = []; 
  const interval_time = 300; // time to generate next winning numbers in milliseconds
  let isRumble = false;

	const bet_container_id = [ 'first-bet', 'second-bet', 'third-bet'];
	const winning_container_id = ['first-winning', 'second-winning', 'third-winning'];

	function init() {
    getBetDigits(bet_container_id);
    let draws = 0;

		var draw_lottery = setInterval(function () {
      console.log('bet----: ' + bet_digits);
      let winning_digits = [];
      let didWin = false;
      // draw first
      winning_digits = generateWinningNumbers();
      // get winning numbers 
      console.log('winning: '+ winning_digits);
      didWin = isArrayEqual(bet_digits, winning_digits, true);
      console.log(isArrayEqual(bet_digits, winning_digits));
      console.log('draws: ' + draws++);
      console.log('-------------------------');

      if (didWin) {
        alert('you won');
        clearInterval(draw_lottery);
      } else {
        return; 
      }
		}, interval_time);
  }

  function isArrayEqual(arr1, arr2, rumble) {
    let firstArray = [], secondArray = [];
    if (rumble) {
      firstArray = arr1.sort();
      secondArray = arr2.sort();
    } else {
      firstArray = arr1;
      secondArray = arr2;
    }
    for (let index = 0; index < secondArray.length; index++) {
      if(firstArray[index] !== secondArray[index]) {
        return false;
      }
    }
    return true;
  }

  function getBetDigits(bet_container_id) {
    bet_container_id.map( elementId => {
      var bet = document.getElementById(elementId).value;
      bet_digits.push(parseInt(bet));
    });
  }

	function generateWinningNumbers() {
    var winning_number = [];
    
    while (winning_number.length < 3) {
      winning_number.push(pickRandomNumber());
    }

    return winning_number; 
	}

	function pickRandomNumber() {
		 var random_zero_to_nine = parseInt(Math.floor((Math.random() * 10)));
		 return random_zero_to_nine;
	}

// }