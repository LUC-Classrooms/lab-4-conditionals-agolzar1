function setup() {
  createCanvas(320, 240);
}
var a = 30 , v = 30;
var diameter = 50;

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill (0,365,0);
    a = width/5
    v = height/5
    diameter = 100;
  }
  else { 
    // otherwise do this:
    fill(365);
    a = width/3;
    v = height/3;
   diameter = 50;
  }
  ellipse(a, v, diameter);
}
