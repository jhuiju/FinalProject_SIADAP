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
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 50) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

Vehicle.prototype.arrive = function() { //돌아와!
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(spped);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}



Vehicle.prototype.update = function() {

}

Vehicle.prototype.show = function() {

}
