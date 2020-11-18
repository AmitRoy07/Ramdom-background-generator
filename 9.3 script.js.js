var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");



css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ");";

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

button.addEventListener("click", function(){
	body.style.background = "linear-gradient(to right, " + randomColor()+ ", " + randomColor()+ ")";
	css.textContent = body.style.background + ";";
});

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}