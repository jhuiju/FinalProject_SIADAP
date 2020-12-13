var tree;
var points = [];

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
    }
  }

  for (var i = 0; i < )
}

function draw() {
  background(0);
}
