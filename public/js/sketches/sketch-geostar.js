var x, y, a, s, aslider;
var canvas;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(51);
  /*
  x = -150;
  y = 10;
  */
  x = 0;
  y = 0;
  x1 = 10;
  y1 = -150;
  x2 = 150;
  y2 = 10;
  a = 0;
  s = 0.2;

  /*
  aSlider = createSlider(0, 360, 100);
  aSlider.position(windowWidth/2, windowHeight-200);
  */

} 

function draw() {
  /*
    var a = aSlider.value();
  text("angle", windowWidth/2 + 150, windowHeight-185);
  */
	
  translate(windowWidth/2, windowHeight/2);
  rotate(a);
  fill(255, 10);
  triangle(mouseX, mouseY, x1, y1, x2, y2);
   a = a + 1; 
  x = x - s;
  /* y = y + s; */
  /* x1 = x1 + s; */
  y1 = y1 - s;
  x2 = x2 + s;
  /* y2 = y2 + s; */
  
  
}