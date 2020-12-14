var tree;
var points = [];
var vehicle = [];

function preload() {
  tree = loadImage("tree.jpg");
}


function setup() {
  createCanvas(960, 960);
  background(0);

  tree.loadPixels();
  for (var x = 0; x < tree.width; x +=5) {
    for (var y = 0; y < tree.height; y +=5) {
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
    var v = vehicle[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
