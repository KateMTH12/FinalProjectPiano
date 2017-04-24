// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/4hA7G3gup-4

/*This code was orginally for steering behaviors to have the dots return to an outline of a word.
I changed it so they seek the Letter that pops up when it is played and sort of hovers around the spot so you can see how often  note is played.
*/

function Rain(i, x, y,x1,y1) {
  this.n = 0.002;
  this.x = random(width);
  this.y = 0;
  this.pos = createVector(this.x, this.y)
  this.vel = p5.Vector.random2D();
  this.accel = createVector();
  this.target = createVector(x1, y1);
  //this.gravity = 1;
  this.r = 6;
  this.maxSpeed = 5;
  this.maxForce = 0.5;

  this.num = noise(n) * 50;
  this.display = function() {
    if (i === 0) {
      fill(232, 12, 36, 30);
    } else if (i === 1) {
      fill(255, 75, 0, 30);
    } else if (i === 2) {
      fill(232, 146, 12, 30);
    } else if (i === 3) {
      fill(232, 179, 85, 30);
    } else if (i === 4) {
      fill(255, 226, 89, 30);
    } else if (i === 5) {
      fill(4, 135, 12, 30);
    } else if (i === 6) {
      fill(13, 83, 60, 30);
    } else if (i === 7) {
      fill(39, 69, 255, 30);
    } else if (i === 8) {
      fill(79, 74, 255, 30);
    } else if (i === 9) {
      fill(131, 100, 255, 30);
    } else if (i === 10) {
      fill(170, 53, 255, 30);
    } else if (i === 11) {
      fill(255, 67, 177, 30);
    } else if (i === 12) {
      fill(255, 0, 255, 30);
    }
    ellipse(this.pos.x, this.pos.y, this.num, this.num);
  }
  this.drop = function() {
    var arrive = this.arrive(this.target);
    var note = createVector(x1, y1);
    var flee = this.flee(note)
    arrive.mult(1);
    flee.mult(3)
    this.applyForce(flee);
    this.applyForce(arrive);
  }

  this.applyForce = function(f) {
    this.accel.add(f);
  }

  this.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.accel);
    this.accel.mult(0);

  }
  this.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxSpeed;
    if (d < 50) {
      speed = map(d, 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }
  this.flee = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxSpeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      return steer;
    } else {
      return createVector(0, 0)
    }
  }
}