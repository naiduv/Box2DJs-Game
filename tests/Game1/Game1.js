//this is your timer, does nothing right now
Timer = function() {}

//randomly returns a +1 or -1
randfunc = function(){
	if(Math.random()<0.5) 
		return 1; 
	else 
		return -1;
}

//update x and y coordinate with randfunc value
Timer.update = function() {
	if(isclicked){
		x = mousex;
		y = mousey;
		isclicked = false;
	}
	x += randfunc();
	y += randfunc();
}

function updatemouseloc(e) {
	mousex = e.pageX;
	mousey = e.pageY;
}

var isclicked = false;

function setclicked(e) {
	if(isclicked)
		isclicked = false;
	else
		isclicked = true;
}

function onkeydownfunc(e) {
	var evtobj=window.event? event : e;
	var unicode=evtobj.charCode? evtobj.charCode : evtobj.keyCode;
	var actualkey=String.fromCharCode(unicode);
	if (actualkey=="D") {
		x=x+14;
		count++;
	} else if(actualkey=="S") {
		x=x-14;
		count--;
	} else {
		return;
	}

	if(count>=5) 
		count=1;
	else if(count<=1) 
		count=5;

	console.log(count)
	console.log("onkeydownfunc");
}

//when the page loads init your vars and get the canvas and context
window.onload = function() {
	x = 100;
	y = 100;
	mousex = 0;
	mousey = 0;
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	count = 1;
}

//function to run on the timer!!
Timer.run = function() {
	document.onmousemove = updatemouseloc;
	document.onmousedown = setclicked;
	document.onkeydown = onkeydownfunc;
	//Timer.update();
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,1000,800);
	ctx.drawImage(document.getElementById(count),x,y);
	console.log(count);

	console.log("run");
};

//timer interval is 10ms
Timer._intervalId = setInterval(Timer.run, 80);