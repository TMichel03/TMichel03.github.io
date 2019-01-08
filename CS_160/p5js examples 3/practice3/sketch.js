function setup() {
  // put setup code here
  createCanvas(1000, 1000);
}

function draw() {
  // put drawing code here
  if(mouseIsPressed) {
    fill(3,0,300);
  } else {
    fill(76,6,8);
  }
  {
  arc(mouseX, mouseY, 80, 80, 0, HALF_PI);
  if(mouseIsPressed) {
    fill(200,80,240);
  } else {
    fill(80,60,200);
  }
  quad(mouseX,mouseY,80,300,240,14,360,200);
  if(mouseIsPressed) {
    fill(0,18,23,90);
  } else {
    fill(0,65,20,57);
  }
}
}