const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const context = canvas.getContext("2d");

let position = {
	x: 0,
	y: 0
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



let gravity = 9.78;

function animate() {
	window.requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillRect(position.x, position.y, size.width, size.height);

	if(position.y + size.height < canvas.height && !keyPressed) position.y += gravity;

	else if(position.y + size.height >= canvas.height) position.y -= acceleration.y;

	position.x += acceleration.x	
	
	


}



window.addEventListener("keydown", (event) => {
	console.log(event.key);
	switch(event.key) {
	case "ArrowUp" || "w":
		acceleration.y = 30;
		keyPressed = true;
		break;

	case "ArrowLeft" || "a":
		acceleration.x = -6;
		break;

	case "ArrowRight" || "d":
		acceleration.x = 6
		break; 
	}

	console.log(acceleration);
});


animate();
