//please
var tree;
var points = [];
var vehicles = [];
var mic;
var snow = [];

function preload() {
  tree = loadImage("tree2.jpg");
}

function setup() {
  createCanvas(960, 960);
  mic = new p5.AudioIn();
  mic.start();

  tree.loadPixels();
  for (var x = 0; x < tree.width; x +=10) {
    for (var y = 0; y < tree.height; y +=10) {
      var index = x + y * tree.width;
      var c = tree.pixels[index * 4];
      var b = brightness([c]);
      if (b > 1) {
        points.push(createVector(x,y));
      }
    }
  }

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(0);
  vol = mic.getLevel()*100;
  print(vol);

  if(vol>2) {
    var newSnowing = {
      xpos:random(width),
      ypos:0,
      size:vol,
      blur:random(150, 255)
    };
    snow.push(newSnowing);
  }

  for (k=0; k < snow.length; k++) {
    var object = snow[k];
    snowing(object.xpos, object.ypos, object.size, object.blur);
    object.ypos +=vol + random(1, 10);
    if (snow[k].ypos > height + 30) {
      snow.splice(1, k);
    }
    }

  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

//snowing
function snowing(xpos, ypos, size, blur) {
  ellipse(xpos, ypos, size, size);
  fill(255, 255, 255, blur);
  noStroke();
}


//Vehicle sketch
function Vehicle(x,y) {
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.target = createVector(x, y);
  this.maxspeed = 3;
  this.maxforce = 30;
  this.r = 5;
}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  var hand = createVector(mouseX, mouseY);
  var flee = this.flee(hand);
  arrive.mult(1);
  flee.mult(5);
  this.applyForce(arrive);
  this.applyForce(flee);
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}

Vehicle.prototype.flee = function(target) { //흩어져!
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 60) {
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



Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function() {
  ellipse(this.pos.x, this.pos.y, random(5, 10), random(5, 10));
  fill(255);
  noStroke();
}
