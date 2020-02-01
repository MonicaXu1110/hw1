var x;
var y;
var radius;

function setup() {
  createCanvas(600, 400);
  x = random(width);
  y = random(height);
  radius = 100;
}

function draw() {
  background(255);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(150, 200, 200, 200);
  }
  else {
    fill(100, 100, 200, 200);
  }

  ellipse(x, y, radius * 2);
  x += random(-3, -1);
  y += random(-1, 3);
}

