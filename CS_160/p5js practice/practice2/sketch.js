function setup() {
  // put setup code here
  createCanvas(1000, 1000);
}

function draw() {
  if(mouseIsPressed) {
    fill(200,80,240);
  } else {
    fill(80,60,200);
  }
  ellipse(mouseX,mouseY,30,300);
  if(mouseIsPressed) {
    fill(0,0,0,35);
  } else {
    fill(180,160,200,57);
  }
  ellipse(mouseX,mouseY,200,80);
  if(mouseIsPressed) {
    fill(34,80,34,80);
  } else {
    fill(80,60,200,80);
  }
  ellipse(mouseX,mouseY,20,105);

  if(mouseIsPressed) {
    fill(200,200,24,35);
  } else {
    fill(80,60,200,50);
  }
  ellipse(mouseX,mouseY,55,90);

}
