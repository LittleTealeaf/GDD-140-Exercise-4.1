/// <reference path="./libraries/p5.global-mode.d.ts" />

var count = 11;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() {
  background(255);
  for(var i = 0; i < count; i++) {
    if(i%2==0) {
      fill("#FF0000");
      rect(i / count * width,height/2,50,50);
    } else {
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(i/count*width,height/2,50,50);
    }
  }

  for(var i = 0; i < count; i++) {
    if(i%2==0) {
      fill("#FF0000");
      rect(width/2,i/count*height,50,50);
    } else {
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(width/2,i/count*height,50,50);
    }
  }
  noLoop();
}