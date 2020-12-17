//testingforsize
var tree;
var points = [];
var vehicles = [];

function preload() {
  tree = loadImage("tree3.jpg");
}

function setup() {
  createCanvas(960, 960);

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
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
