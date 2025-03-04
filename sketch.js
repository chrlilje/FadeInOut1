let imgBg;

let textAlpha = 0;
let textAlphaChange = 0;

function preload() {
  // Load the background image
  imgBg = loadImage('assets/bg.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imgBg.resize(width, height);
}

function draw() {
  // Insert the background image as an image
  image(imgBg, 0, 0);
  // Set the text size
  textSize(200);
  // Set the text color
  fill(255, 255, 255, textAlpha);
  text("Hello fading world", 100, height/2);

  // Change the text alpha value 
  textAlpha += textAlphaChange;
  if (textAlpha > 255) {
    textAlpha = 255;
  }
  if (textAlpha < 0) {
    textAlpha = 0;
  }
}

function keyPressed() {
  if (key == 'w') {
    textAlphaChange = 5;
  }
  if (key == 's') {
    textAlphaChange = -5;
  }
}