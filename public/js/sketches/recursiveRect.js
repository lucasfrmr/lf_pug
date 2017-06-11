
function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-2');
  background(100);
  rectMode(CENTER);
  d = width/4;
  a = 0;
  a1 = 0;
  xoff1 = 0;
  xoff2 = 10000;
  xoff3 = 1000;
  xoff4 = 100000;
}

function draw() {
//  var x = map(noise(xoff1), 0, 1, 0, width);
//  var y = map(noise(xoff2), 0, 1, 0, height);
  xoff1 += 0.001;
  xoff2 += 0.01;


  x1 = (map(noise(xoff3), 0, 1, 0, width))*cos(a);
  y1 = (map(noise(xoff4), 0, 1, 0, height))*sin(a);
  a1 += 0.1;
  x = (map(noise(xoff1), 0, 1, 0, width))*cos(a);
  y = (map(noise(xoff2), 0, 1, 0, height))*sin(a);
  a += 0.01;
  
  

  
  push();
  translate(width/2, height/2);
  fill(255, 100);
  stroke(0);
  circle(x, y, width/4);
  square(x1, y1, d+20);
//  circle(x-5, y-5, d);
//  circle(x+5, y-5, d);
//  circle(x-5, y+5, d);
  
  pop();
  d += 0.01;
// a += 0.5;
}
 

function circle(x, y, d){
  
  ellipse(x, y, d, d);
  if ( d > 1){
    circle(x, y, d/2, d/2);
  }
//  x = d*cos(a);
//  y = d*sin(a);
 
}

function square(x, y, d){
  
  rect(x, y, d, d);
  if ( d > 1){
    square(x, y, d/2, d/2);
  }
//  x = d*cos(a);
//  y = d*sin(a);
 
}