const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const context = canvas.getContext("2d");

let position = {
	x: 0,
	y: canvas.height - 100
}

let size = {
	width: 100,
	height: 100
}

let acceleration = {
	x: 0,
	y: 0
}

let keyPressed = false;



let gravity = 0.5;

function jump() {
	
	position.y += acceleration.y;


	if(position.y + size.height >= canvas.height) {
		acceleration.y = 0;
		position.y = canvas.height - size.height;;
	} else acceleration.y += gravity
	

}

function animate() {
	window.requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillRect(position.x, position.y, size.width, size.height);
	jump();

	position.x += acceleration.x;


}



window.addEventListener("keydown", (event) => {
	console.log(event.key);
	switch(event.key) {
	case "ArrowLeft":
		acceleration.x = -6;
		break;

	case "ArrowRight":
		acceleration.x = 6
		break; 
	}

	console.log(acceleration);
});


window.addEventListener("keydown", (event) => {
	switch(event.key) {
	case "ArrowUp":
		acceleration.y = -20;
		keyPressed = true;
		break;

	}

});




window.addEventListener("keyup", (event) => {
	console.log(event.key);
	switch(event.key) {

	case "ArrowLeft":
		acceleration.x = 0;
		break;

	case "ArrowRight":
		acceleration.x = 0;
		break; 
	}

	console.log(acceleration);
});




window.addEventListener("keyup", (event) => {
	console.log(event.key);
	switch(event.key) {

	case "ArrowUp":
		keyPressed = false;
	}
});


animate();
