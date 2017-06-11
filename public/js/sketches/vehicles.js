function Vehicle(x, y) {
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 800;
  this.maxspeed = 25;
  this.maxforce = 1200.5;
  this.g = 0;
}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  this.applyForce(arrive);
  
  mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);
  this.applyForce(flee);
  
  this.g = this.g + 0.1;
  if (this.g > 12) {
  	this.g = 13;
  }
}

Vehicle.prototype.applyForce = function(f) {
	this.acc.add(f);
}

Vehicle.prototype.update = function() {
	this.pos.add(this.vel);
  	this.vel.add(this.acc);
  	this.acc.mult(0);
}

Vehicle.prototype.show = function() {
  stroke(5);
  strokeWeight(10.5);
  
   //triangle(this.pos.x, this.pos.y, this.pos.x -20, this.pos.y, this.pos.x -10 + this.g, this.pos.y + 20 + this.g);
  
   point(this.pos.x, this.pos.y);
  // fill(0, 255, 0, 75);
    //fill(0, 255, 0);
  //rect(this.pos.x, this.pos.y, this.g, this.g);
  //noFill();
  //fill(255);
  //ellipse(this.pos.x, this.pos.y, this.g - 10, this.g - 10);
  //ellipse(this.pos.x -20, this.pos.y, this.g - 10, this.g - 10);
  //ellipse(this.pos.x, this.pos.y, this.g - 10, this.g - 10);
  

  
  
}

Vehicle.prototype.arrive = function(target) {
  	var desired = p5.Vector.sub(target, this.pos);
  	var d = desired.mag();
  	var speed = this.maxspeed;
  	if (d < 100) {
      speed = map(d, 0, 1000, 0, this.maxspeed);
    }
	desired.setMag(speed);
  	var steer = p5.Vector.sub(desired, this.vel);
  	steer.limit(this.maxforce);
  	return steer;
}

Vehicle.prototype.flee = function(target) {
  	var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
	if (d < 100) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    }else{
      createVector(0, 0);
    }  
}