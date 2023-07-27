// my canvas
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// bg image
const bg = new Image();
bg.src = 'img/game-bg-img-600.jpeg';

// food
const foodImg = new Image();
foodImg.src = 'img/food-icon.svg';

let box = 60; //cell size
let score = 0; //score

// food posicion
let food = {
	x: Math.floor((Math.random() * 10)) * box,
	y: Math.floor((Math.random() * 10)) * box
};

// snake posicion
let snake = [];
snake[0] = {
	x: 5 * box,
	y: 5 * box
};

// snake controll
document.addEventListener('keydown', direction);

let dir;

function direction(event) {
	if (event.keyCode == 37 && dir != 'left') { dir = 'left'; }
	else if (event.keyCode == 38 && dir != 'up') { dir = 'up'; }
	else if (event.keyCode == 39 && dir != 'right') { dir = 'right'; }
	else if (event.keyCode == 40 && dir != 'down') { dir = 'down'; }
}

// not eat self
function eatTail(head, snakeArr) {
	for (let i = 0; i < snakeArr.length; i++) {
		if (head.x == snakeArr[i].x && head.y == snakeArr[i].y) {
			clearInterval(game);
		}
	}
}

// draw game canvas
function drawGame() {
	// draw bg
	ctx.drawImage(bg, 0, 0);
	// draw food
	ctx.drawImage(foodImg, food.x, food.y);

	// draw snake
	for (let i = 0; i < snake.length; i++) {
		ctx.fillStyle = (i == 0) ? 'green' : 'red';
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
	}

	//draw score
	ctx.fillStyle = 'white';
	ctx.font = '50px Arial';
	ctx.fillText(score, box / 3, box / 1.2);

	// get snake position
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	// snake eat food
	if (snakeX == food.x && snakeY == food.y) {
		score++;

		// new food position
		food = {
			x: Math.floor((Math.random() * 10)) * box,
			y: Math.floor((Math.random() * 10)) * box
		};
	}
	else {
		// delete snake last position
		snake.pop();
	}

	// snake position out the canvas
	if (snakeX < box) { snakeX = box * 10; }
	if (snakeY < box) { snakeY = box * 10; }
	if (snakeX > box * 10) { snakeX = box; }
	if (snakeY > box * 10) { snakeY = box; }


	// delete last position
	// snake.pop();

	// add new position
	if (dir == 'left') { snakeX -= box; }
	if (dir == 'right') { snakeX += box; }
	if (dir == 'up') { snakeY -= box; }
	if (dir == 'down') { snakeY += box; }

	let newHead = {
		x: snakeX,
		y: snakeY
	};

	// not eat self
	eatTail(newHead, snake);
	// grow snake
	snake.unshift(newHead);
}

let game = setInterval(drawGame, 300);
