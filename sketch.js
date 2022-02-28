/// <reference path="./libraries/p5.global-mode.d.ts" />

var count = 11;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() {
  background(255);

  //Create the horizontal loop
  for(var i = 0; i < count; i++) {
    if(i%2==0) {
      //Rectangle of same color
      fill("#FF0000");
      rect(i / count * width,height/2,50,50);
    } else {

      //Ellipse of random color
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(i/count*width,height/2,50,50);
    }
  }

  //Create the vertical loop
  for(var i = 0; i < count; i++) {
    if(i%2==0) {
      //Rectangle of same color
      fill("#FF0000");
      rect(width/2,i/count*height,50,50);
    } else {
      //Ellipse of random color
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(width/2,i/count*height,50,50);
    }
  }
  noLoop();
}

//Add ability to re-render on loop
function mousePressed() {
  loop();
}