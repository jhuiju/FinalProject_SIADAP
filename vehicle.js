function Vehicle(x,y) {
  this.pos = CreateVector(x, y);
  this.vel = createVector(x, y);
  this.acc = createVector();
  this.target = createVector(x, y);
  this.maxspeed = 30;
  this.maxforce = 20;
  this.r = 10;
}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  var flee = this.flee(hand);
  var hand = createVector(mouseX, mouseY);
  arrive.mult(1);
  flee.mult(5);
  this.applyForce(arrive);
  this.applyForce(flee);
}

Vehicle.prototype.flee = function() { //흩어져!

}

Vehicle.prototype.arrive = function() { //돌아와!

}



Vehicle.prototype.update = function() {

}

Vehicle.prototype.show = function() {

}
