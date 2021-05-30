var canvas;
let bubbles = [];
// light green, brown, cream, off-white
let reds = [151, 146, 228, 229]
let greens = [163, 123, 199, 228]
let blues = [150, 82, 166, 227]


function setup() {
  canvas = createCanvas(600, 300);
  canvas.position(0, 0);
  
  for (let i = 0; i < 20; i++) {
    bubbles.push( new Bubble(random(width), random(height)) );
  }
}


function draw() {
  background(255);
  
  for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].display();
    bubbles[i].reset();
  }
}


class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(60, 100);
    
    this.offset = random(0, 100);
    this.fadeSpeed = random(0, 5);
    this.index = Math.floor(random(0, reds.length));
  }
  
  display() {
    noStroke();
    this.opacity = 255 * sin(this.fadeSpeed) - this.offset;
    this.fadeSpeed += 0.01;
    this.col = color(reds[this.index], greens[this.index], blues[this.index], this.opacity);
    fill(this.col);
    circle(this.x, this.y, this.size);
    }
  
  reset() {
    if (this.opacity <= 0) {
      this.x = random(width);
      this.y = random(height);
      this.opacity = 255;
    }
  }
}