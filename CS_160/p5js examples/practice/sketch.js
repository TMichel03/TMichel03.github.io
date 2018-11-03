function setup() {
  // put setup code here
  createCanvas(1000, 1000);
}

function draw() {
  // put drawing code here
  if(mouseIsPressed) {
    fill(3,75,240);
  } else {
    fill(76,6,8);
  }
  ellipse(mouseX,mouseY,80,80);
}