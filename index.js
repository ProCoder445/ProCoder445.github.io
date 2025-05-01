const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const context = canvas.getContext("2d");

let position = {
	x: 0,
	y: 0
}



let gravity = 9.78;

function animate() {
	window.requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillRect(position.x, position.y, 100, 100);
	position.y += gravity;

	if(position.y + 100 >= canvas.height || position.y <= 0) gravity *= -1

}

animate();
