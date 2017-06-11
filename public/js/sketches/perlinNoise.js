var xoff1, xoff2; 


function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-2');

  xoff1 = 0;
  xoff2 = 10000;
  
}

function draw() {
  background(100, 20);
  
  xoff1 += 0.01;
  xoff2 += 0.01;
  
  var x = map(noise(xoff1), 0, 1, 0, width);
  var y = map(noise(xoff2), 0, 1, 0, height);
  ellipse(x, y, 50, 50);
}