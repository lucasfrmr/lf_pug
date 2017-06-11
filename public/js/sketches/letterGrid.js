var cols, rows;
var scl = 50;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-2');

  var w = width;
  var h = height;
  cols = w / scl;
  rows = h / scl;
  frameRate(6);
  
  dot = new Dot();
}

function draw() {
  background(100);
  //translate(width/2, height/2);
  for (j = 0; j < cols; j++){
    for(i = 0; i < rows; i++){
    dot.show(j*scl, i*scl);
    
    }
  }
}

function Dot(){
this.sym = ['!', '<', '>', '-', '_', '&', '%', '/', '[', ']', '{', '}', '—', '=', '+', '*', '^', '?', '#', '_', '_', '_', '_', '_', '_', '_', '_'];

  
  this.show = function(x, y){
    this.x = x;
  	this.y = y;
    textSize(40);
  	text(random(this.sym), this.x, this.y);
  }
}