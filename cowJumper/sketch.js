//GLOBAL VARIABLES
var characterColor = 0;
var legY = -10;
var headY = -40;
var snoutY = -35;
var earY = -50;
var bodyY = -30;
var tailBaseY = -37.5;
var tailY = -27.5;
var jumpHeight = -5;
var funds = 10;
var cost = 5;

function character() {
  stroke(characterColor);
  fill(characterColor);

  rect(25, headY, 20, 20); //Head
  rect(35, snoutY, 10, 10); //Snout
  rect(15, earY, 5, 7); //Left Ear
  rect(25, earY, 5, 7); //Right Ear
  rect(0, bodyY, 45, 20); //Body
  rect(20, legY, 5, 20); //Front Leg (Front)
  rect(10, legY, 5, 20); //Back Leg (Front)
  rect(-20, legY, 5, 20); //Front Leg (Back)
  rect(-10, legY, 5, 20); //Back Leg (Back)
  rect(-25, tailBaseY, 5, 5); //TailBase
  rect(-27.5, tailY, 5, 25); //Tail
  fill(255); //White
  rect(25, -42.5, 5, 5); //Eye
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textAlign(CENTER);
  frameRate(5);
  jumpAnimation();
}

function draw() {
  translate(200, 200) //puts (0,0) in the center of canvas
  //Negative, Up and Left, Positive, Down and Right

  background(220);
  for (i = 200; i > -200; i = i - 10) {
    stroke(255);
    line(i, -200, i, 200);
    line(-200, i, 200, i);
    stroke(0);
    line(0, -200, 0, 200);
    line(-200, 0, 200, 0);
  }

  //UI
  rect(0, 100, 100, 50); //Jump
  fill(0);
  textSize(15);
  text('UPGRADE', 0, 105);
  
  textSize(12);
  
  fill(255);
  rect(125, 100, 100, 50); //Cost
  fill(0);
  text('COST', 125, 95);
  text(cost, 125, 115);
  
  fill(255);
  rect(-125, 100, 100, 50); //Funds
  fill(0);
  text('FUNDS', -125, 95);
  text(funds, -125, 115);
  
  fill(0);
  noStroke();
  rect(0, -175, 400, 50);
  rect(-200, 0, 10, 400);
  rect(200, 0, 10, 400);
  rect(0, 200, 400, 10);
  stroke(0);
  
  textSize(20);
  fill(255);
  text('Press Space to Jump and Earn Money!', 0, -170);
  


  character();
}

function jumpAnimation() {
  for (j = 0; j > jumpHeight; j--) {
    legY = legY - 1;
    headY = headY - 1;
    snoutY = snoutY - 1;
    earY = earY - 1;
    bodyY = bodyY - 1;
    tailBaseY = tailBaseY - 1;
    tailY = tailY - 1;
  }

  var tick = 1;

  if (tick === 1) {
    for (j = 0; j > jumpHeight; j--) {
      legY = legY + 1;
      headY = headY + 1;
      snoutY = snoutY + 1;
      earY = earY + 1;
      bodyY = bodyY + 1;
      tailBaseY = tailBaseY + 1;
      tailY = tailY + 1;
    }
  }

  tick = 0;
}

function mouseClicked() {
  if (mouseX > -50 && mouseX < 50 && mouseY > 75 && mouseY < 125) {
    if (funds - costs >= 0) {
      jumpHeight = jumpHeight + 1;
      funds = funds - cost;
      cost = cost + 5;
    }
  }
}

function keyTyped() {
  if (keyCode == 32) {
    jumpAnimation();
    funds = funds + 1
  }
}