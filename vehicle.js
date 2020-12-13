function Vehicle(x,y) {
  this.pos = CreateVector(x, y);
  this.vel = createVector(x, y);
  this.acc = createVector();
}

Vehicle.prototype.update = function() {

}

Vehicle.prototype.show = function() {

}

Vehicle.prototype.arrive = function() { //돌아와!

}

Vehicle.prototype.flee = function() { //도망가!

}
