function Vehicle(x,y) {
  this.pos = CreateVector(x, y);
  this.vel = createVector(x, y);
  this.acc = createVector();
  this.maxspeed = 30;
  this.maxforce = 20;
  this.r = 10;
}

Vehicle.prototype.behaviors = function() {

}



Vehicle.prototype.arrive = function() { //돌아와!

}

Vehicle.prototype.flee = function() { //흩어져!

}

Vehicle.prototype.update = function() {

}

Vehicle.prototype.show = function() {

}
