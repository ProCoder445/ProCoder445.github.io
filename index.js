import {context, canvas} from "./variables.js";
import {EmotionStateObject} from "./emotionState.js";
var size = {
	width: 100,
	height: 100
};


var position = {
	x: 0,
	y: canvas.height - size.width
};


var acceleration = {
	x: 0,
	y: 0
};




let gravity = 0.5;

function drawSimpleSprite() {
	let character = new EmotionStateObject(true, "circle", 100, 100, "./Assets/HappySeed.png");

	character.drawImage(30, 30);
}



function jump() {
	
	position.y += acceleration.y;


	if(position.y + size.height >= canvas.height) {
		acceleration.y = 0;
		position.y = canvas.height - size.height;
	} else acceleration.y += gravity
	

}

function animate() {
	window.requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillRect(position.x, position.y, size.width, size.height);
	jump();
	position.x += acceleration.x;
	if(position.x + size.width >= canvas.width) {
	position.x = canvas.width - size.width;
	} else if(position.x <= 0) {
	position.x = 0;
	}


	drawSimpleSprite();


}



window.addEventListener("keydown", (event) => {
	switch(event.key) {
	case "ArrowLeft":
		acceleration.x = -6;
		break;

	case "ArrowRight":
		acceleration.x = 6
		break; 
	}

});


window.addEventListener("keydown", (event) => {
	switch(event.key) {
	case "ArrowUp":
		if(position.y + size.height >= canvas.height) {
			acceleration.y = -20;
		};
		break;

	}

});




window.addEventListener("keyup", (event) => {
	switch(event.key) {

	case "ArrowLeft":
		acceleration.x = 0;
		break;

	case "ArrowRight":
		acceleration.x = 0;
		break; 
	}

});


animate();
