const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// set initial position of ball
let x = canvas.width / 2;
let y = canvas.height / 2;

// set initial speed of ball
let dx = 3;
let dy = -3;

// set dimensions of paddle
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

// set initial state of keys
let rightPressed = false;
let leftPressed = false;

// function to draw ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// function to draw paddle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// function to handle collision detection
function collisionDetection() {
  if (y + dy < 10) {
    dy = -dy;
  } else if (y + dy > canvas.height - 10) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("Game Over");
      document.location.reload();
    }
  }

  if (x + dx < 10 || x + dx > canvas.width - 10) {
    dx = -dx;
  }
}

// function to handle key presses
function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

// function to move paddle
function movePaddle() {
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
}

// function to clear canvas and redraw objects
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  collisionDetection();
  movePaddle();
  x += dx;
  y += dy;
}

// set interval for game loop
setInterval(draw, 10);

// add event listeners for key presses
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
