var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Peanut_butter_jelly_time_8dddd_by_mariomario54321-d35zla9.png') {
		myImage.setAttribute ('src','images/harambe-22-1.jpg');
	} else {
		myImage.setAttribute ('src','images/Peanut_butter_jelly_time_8dddd_by_mariomario54321-d35zla9.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'You killed Harambe, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'You killed Harambe, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
