var ball;
var left;
var right;
var colBox;
var paddleSensitivity = 10;
var p1, p2;
var flash1, flash2;
var winningCondition = 5;

function setup() {
  createCanvas(1000,600);
  ball = new Ball();
  left = new Paddle(true);
  right = new Paddle(false);

  fill(255);
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  textSize(30);
  rectMode(CENTER);
  colBox = width/2 - 1.5*left.w - ball.r;
  flash1 = 70;
  flash2 = 70;
  p1 = 0;
  p2 = 0;
}

function draw() {
  background(51);

  fill(flash1);
  rect(0.25*width, 0.5*height, width/2, height); //flash player 1
  flash1--;
  flash1 = constrain(flash1, 51, 70);
  fill(flash2);
  rect(0.75*width, 0.5*height, width/2, height); //flash payer 2
  flash2--;
  flash2 = constrain(flash2, 51, 70);
  fill(80);
  text(p1, 0.25*width, 0.25*height);            //player 1 points
  text(p2, 0.75*width, 0.25*height);            //player 2 points
  fill(255);

  stroke(80);
  line(width/2, 0, width/2, height);            //aesthetics ~.~
  noStroke();

  left.show();
  right.show();
  ball.show();
  ball.update();

  //Paddle colissions
  var relBallPos = abs(ball.x - width/2);
  if (relBallPos > colBox) {
    if (ball.x < width/2) {
      if (ball.paddleCheck(left)) {
        p2++;
        flash2 = 70;
        if (p2 == winningCondition) {
          fill(51);
          rect(0.75*width, 0.25*height, 50, 50);
          fill(80);
          text(p2, 0.75*width, 0.25*height);
          fill(100,255,100,100);
          rect(0.75*width, 0.5*height,width/2, height);
          fill(255,100,100,100);
          rect(0.25*width, 0.5*height,width/2, height);
          noLoop();
        }
      }
    } else {
      if (ball.paddleCheck(right)) {
        p1++;
        flash1 = 70;
        if (p1 == winningCondition) {
          fill(51);
          rect(0.25*width, 0.25*height, 50, 50);
          fill(80);
          text(p1, 0.25*width, 0.25*height);
          fill(100,255,100,100);
          rect(0.25*width, 0.5*height,width/2, height);
          fill(255,100,100,100);
          rect(0.75*width, 0.5*height,width/2, height);
          noLoop();
        }
      }
    }
  }

  //Paddle control
  if (keyIsDown(87)) { //W
    left.move(-paddleSensitivity);
  }
  if (keyIsDown(83)) { //S
    left.move(paddleSensitivity);
  }
  if (keyIsDown(38)) { //UP
    right.move(-paddleSensitivity);
  }
  if (keyIsDown(40)) { //DOWN
    right.move(paddleSensitivity);
  }
}
