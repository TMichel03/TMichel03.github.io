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
  quad(mouseX,mouseY,30,300,240,14,360,200);
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


}
quad(158, 55, 199, 14, 392, 66, 351, 107);  
triangle(347, 54, 392, 9, 392, 66); 
triangle(158, 55, 290, 91, 290, 112);
}