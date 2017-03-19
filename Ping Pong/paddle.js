function Paddle(left) {
  this.w = 10;
  this.h = 100;
  this.x = width - this.w;
  this.y = height/2;

  if (left) this.x = this.w;

}

Paddle.prototype.show = function() {
  rect(this.x, this.y, this.w, this.h);
}

Paddle.prototype.move = function(deltay) {
    this.y += deltay;
    this.y = constrain(this.y, this.h/2, height - this.h/2);
}
