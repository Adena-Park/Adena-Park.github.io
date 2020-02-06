var characters = ['A', 'B', 'C'];
var charCounter = 1;
var playInput = 1;
var ran = 0;
var rR = 0;
var rG = 0;
var rB = 0;


function setup() {
  createCanvas(400, 400);
  background(220);
  rectMode(CENTER);
  textAlign(CENTER);
  noStroke();
  fill(127, 189, 126);
  rect(50, 50, 100, 100);
  stroke(255);
  fill(255);
  text('Randomizer', 50, 40);
  text('Button', 50, 60);
}

function draw() {
  for (i = 400; i > -400; i = i - 100) {
    strokeWeight(1);
    stroke(255);
    line(i, -400, i, 400);
    line(-400, i, 400, i);
    stroke(0);
    line(0, -400, 0, 400);
    line(-400, 0, 400, 0);
  }
}

function mousePressed() {
  if (mouseX < 100 && mouseX > 0 && mouseY > 0 && mouseY < 100) {
    randomizer();

  }

  if (mouseY > 0 && mouseY < 100) {
    if (mouseX < 200 && mouseX > 100) {
      //Create Marker
      markerLoc(150, 50);
    } else if (mouseX < 300 && mouseX > 200) {
      //Create Marker
      markerLoc(250, 50);
    } else if (mouseX < 400 && mouseX > 300) {
      //Create Marker
      markerLoc(350, 50);
    }
  } else if (mouseY > 100 && mouseY < 200) {
    if (mouseX < 100 && mouseX > 0) {
      //Create Marker
      markerLoc(50, 150);
    } else if (mouseX < 200 && mouseX > 100) {
      //Create Marker
      markerLoc(150, 150);
    } else if (mouseX < 300 && mouseX > 200) {
      //Create Marker
      markerLoc(250, 150);
    } else if (mouseX < 400 && mouseX > 300) {
      //Create Marker
      markerLoc(350, 150);
    }
  } else if (mouseY > 200 && mouseY < 300) {
    if (mouseX < 100 && mouseX > 0) {
      //Create Marker
      markerLoc(50, 250);
    } else if (mouseX < 200 && mouseX > 100) {
      //Create Marker
      markerLoc(150, 250);
    } else if (mouseX < 300 && mouseX > 200) {
      //Create Marker
      markerLoc(250, 250);
    } else if (mouseX < 400 && mouseX > 300) {
      //Create Marker
      markerLoc(350, 250);
    }
  } else if (mouseY > 300 && mouseY < 400) {
    if (mouseX < 100 && mouseX > 0) {
      //Create Marker
      markerLoc(50, 350);
    } else if (mouseX < 200 && mouseX > 100) {
      //Create Marker
      markerLoc(150, 350);
    } else if (mouseX < 300 && mouseX > 200) {
      //Create Marker
      markerLoc(250, 350);
    } else if (mouseX < 400 && mouseX > 300) {
      //Create Marker
      markerLoc(350, 350);
    }
  }

  return false;
}

function randomizer() {
  rR = random(0, 255);
  rG = random(0, 255);
  rB = random(0, 255);
}

function markerLoc(locX, locY) {
  //Create Marker
  noStroke();
  fill(rR, rG, rB);
  ellipse(locX, locY, 50, 50);

  //Create Assigned Leter [FIX]
  stroke(0);
  strokeWeight(5);
  ran = random(0, 2);
  text(characters[ran], mouseX, mouseY);
}