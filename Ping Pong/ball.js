function Ball() {
    this.x = width/2;
    this.y = height/2;
    this.xspd = -3;
    this.yspd = 4;
    this.r = 8;
}

Ball.prototype.show = function() {
    ellipse(this.x,this.y,2*this.r,2*this.r);
}

Ball.prototype.boundsCheck = function() {
    if (this.y - this.r < 0 || this.y + this.r > height) this.yspd *= -1;
}

Ball.prototype.update = function() {
    this.boundsCheck();
    this.x += this.xspd;
    this.y += this.yspd;
}

Ball.prototype.reset = function() {
  this.x = width/2;
  this.y = height/2;
}

Ball.prototype.paddleCheck = function(paddle) {

  if (abs(ball.x - width/2) > width/2) {
    this.reset();
    return true;
  }

  if (abs(ball.x - width/2) > width/2 - this.r - 0.5*paddle.w) {
    return false
  } else if (this.y > paddle.y - paddle.h/2 && this.y < paddle.y + paddle.h/2) {
    this.xspd *= -1;
    return false;
  }
}
