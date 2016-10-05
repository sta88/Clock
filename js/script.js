'use strict';

var digit1 = [4,8,9,12,14,19,24,29,34],
	digit2 = [2,3,4,6,10,15,19,23,27,31,32,33,34,35],
	digit3 = [2,3,4,6,10,15,18,19,25,26,30,32,33,34],
	digit4 = [1,5,6,10,11,15,16,17,18,19,20,25,30,35],
	digit5 = [1,2,3,4,5,6,11,16,17,18,19,20,25,30,31,32,33,34,35],
	digit6 = [1,2,3,4,5,6,11,16,17,18,19,20,21,25,26,30,31,32,33,34,35],
	digit7 = [1,2,3,4,5,10,14,18,23,28,33],
	digit8 = [1,2,3,4,5,6,10,11,15,16,17,18,19,20,21,25,26,30,31,32,33,34,35],
	digit9 = [1,2,3,4,5,6,10,11,15,16,17,18,19,20,25,30,31,32,33,34,35],
	digit0 = [1,2,3,4,5,6,10,11,15,16,20,21,25,26,30,31,32,33,34,35],
	clockHours10 = document.querySelectorAll('#hours10 .circle'),
	clockHours1 = document.querySelectorAll('#hours1 .circle'),
	clockMinutes10 = document.querySelectorAll('#minutes10 .circle'),
	clockMinutes1 = document.querySelectorAll('#minutes1 .circle'),
	clockTime = [clockHours10,clockHours1,clockMinutes10,clockMinutes1];

function circleLight(clockArray, digitArray){
	var i=0, j=0;
	for( i=0; i<clockArray.length; i++ ){
		if ( i === digitArray[j]-1 ){
			clockArray[i].classList.add('circle-light');
			j++;
		}
	}
	return clockArray;
};

function clearActive(array){
	for (var i=0; i<array.length; i++){
		array[i].classList.remove('circle-light');
	}
};

function timeUpdate(){

	var date = new Date(),
		dateHours = date.getHours(),
		dateMinutes = date.getMinutes(),
		dateHours10 = Math.floor( dateHours/10 ),
		dateHours1 = dateHours%10,
		dateMinutes10 = Math.floor( dateMinutes/10 ),
		dateMinutes1 = dateMinutes%10,
		dateTime = [dateHours10,dateHours1,dateMinutes10,dateMinutes1];

	for ( var i=0; i<dateTime.length; i++ ){
		switch ( dateTime[i] ){
			case 1:
			clearActive(clockTime[i]);
			circleLight(clockTime[i], digit1);
			break;
			case 2:
			clearActive(clockTime[i]);
			circleLight(clockTime[i], digit2);
			break;
			case 3:
			clearActive(clockTime[i]);
			circleLight(clockTime[i], digit3);
			break;
			case 4:
			clearActive(clockTime[i]);
			circleLight(clockTime[i], digit4);
			break;
			case 5:
			clearActive(clockTime[i]);
			circleLight(clockTime[i], digit5);
			break;
			case 6:
			clearActive(clockTime[i]);
			circleLight(clockTime[i], digit6);
			break;
			case 7:
			clearActive(clockTime[i]);
			circleLight(clockTime[i], digit7);
			break;
			case 8:
			clearActive(clockTime[i]);
			circleLight(clockTime[i], digit8);
			break;
			case 9:
			clearActive(clockTime[i]);
			circleLight(clockTime[i], digit9);
			break;
			case 0:
			clearActive(clockTime[i]);
			circleLight(clockTime[i], digit0);
			break;
		}
	}

	document.getElementById('hours').innerHTML = date.getHours();
	document.getElementById('minutes').innerHTML = date.getMinutes();
};

setInterval("timeUpdate()", 1000);