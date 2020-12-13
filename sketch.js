var tree;

function preload() {
  tree = loadImage("tree.jpg");
}


function setup() {
  createCanvas(960, 960);
  background(0);

  tree.loadPixels();
}

function draw() {
  background(0);
}
