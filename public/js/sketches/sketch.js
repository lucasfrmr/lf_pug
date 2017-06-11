var font;
var canvas;
var scl, a1;
var vehicles = [];


function preload(){
 font = loadFont('lib/AvenirNextLTPro-Demi.otf'); 
}

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-2');
  ellipseMode(CENTER);
  rectMode(CENTER);
  //scl = map(windowWidth, windowWidth/2, windowWidth, 50, 200);
    var points = font.textToPoints('LucasFarmer', width/2 - 580, height/2 - 150, 150);
  var a1 = select('#moo');
    for (var i = 0; i < points.length; i++){
      var pt = points[i];
      var vehicle = new Vehicle(pt.x, pt.y);
      vehicles.push(vehicle);
      /* stroke(0, 255, 0);
      strokeWeight(5);
      point(pt.x, pt.y); */ 
    }
} 

function draw() {
	background(255);
	for (var i = 0; i < vehicles.length; i++) {
    	var v = vehicles[i];
      	v.behaviors();
      	v.update();
      	v.show();
    }



}