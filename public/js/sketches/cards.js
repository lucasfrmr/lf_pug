var droplets = [];
var dropAmount;


function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-2');
  background(100);
  dropAmount = 50;
  x = 0;
  y = 0;
  
  
  for(i=0;i<dropAmount;i++){
    droplets.push(new Droplet());
  }
}

function draw() {
  for(i=0;i<droplets.length;i++){
  var drop = droplets[i];
    drop.show();
    drop.fall();
    drop.pnoise();
  
  }
  //text(droplets, width/2, height/2);
}


function Droplet(){

  this.x = random(0, width);
  this.y = random(0, height)-height;
  this.dropletSize = 50; 
  this.xoff1 = random(0, width);
  //this.xoff2 = 10000
  
  
  
 this.fall = function(){
   this.y += 3;
   
   if(this.y > height){this.y = 0;}
 
 }
  
 this.pnoise = function(){
  this.xoff1 += 0.01;
  //this.xoff2 += 0.01;
  
  this.x = map(noise(this.xoff1), 0, 1, 0, width);
  //this.y = map(noise(this.xoff2), 0, 1, 0, height);
 }
  
  
  this.show = function(){
    //translate(width/2, height/2);
    fill(255);
    rect(this.x, this.y, this.dropletSize, this.dropletSize)
  
  }


}