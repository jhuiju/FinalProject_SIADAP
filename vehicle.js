function Vehicle(x,y) {
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D();
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

Vehicle.prototype.flee = function(target) { //흩어져!
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

Vehicle.prototype.arrive = function(target) { //돌아와!
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function() {
  ellipse(this.pos.x, this.pos.y, 10, 10);
  fill(255);
  noStroke();
}
