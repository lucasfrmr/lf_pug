var v;
var birds = [];
var canvas;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-2');
  
  for(i = 0; i < 50; i++){
  	birds.push(new Vehicle(random(0, width), random(0, height)));
  }
}

function draw() {
  background(100);

  var mouse = createVector(mouseX, mouseY);

  // Draw an ellipse at the mouse position
  fill(127);
  stroke(200);
  strokeWeight(2);
  ellipse(mouse.x, mouse.y, 48, 48);
	for (i = 0; i < birds.length; i++) {
    var v = birds[i];
 	  v.arrive(mouse);
      v.update();
      v.display();
  }
  // Call the appropriate steering behaviors for our agents


}