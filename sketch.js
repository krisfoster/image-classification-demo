// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

let img;
let capture;
let label = "Empty";
let canvasWidth = 500;
let canvasHeight = 500;
let labelHeight = 100;
let textHeight = 25;
let textVertPadding = 20;
let textHorizPadding = 20;
let modelOK = false;

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
  label = "AI is ready....to take over the Wrold! mwah, mwah, mwah!"
  modelOK = true;
}

function classify() {
  // Make a prediction with a selected image
  classifier.classify(capture, (err, results) => {
    console.log(results);
    if (err) {
      console.err(err);
    } else {
      label = results[0].label;
    }
  });
}

function preload() {
  img = loadImage("imgs/penguin.jpeg");
  capture = createCapture(VIDEO);
  capture.size(canvasWidth, canvasHeight);
  capture.hide();

}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textSize(textHeight);
  fill(255);
  stroke(0);
  strokeWeight(4);
  setInterval(classify, 500);
}


function draw() {
  background(220);
  // Displays the image at its actual size at point (0,0)
  image(capture, 0, 0, width, height - labelHeight);
  if (modelOK) {
    text(label, 0 + textHorizPadding, height-labelHeight + textVertPadding, width, labelHeight);
  }
}



