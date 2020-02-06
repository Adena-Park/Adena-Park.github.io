//GLOBAL VARIABLES
var backgroundColor = 220;
var lineColor = 255;
var centerColor = 0;
var cCR = 0;
var cCG = 0;
var cCB = 0;
var legY = -10;
var headY = -40;
var snoutY = -35;
var earY = -50;
var bodyY = -30;
var tailBaseY = -37.5;
var tailY = -27.5;
var jumpHeight = 10;
var jumpTop = 80;
var funds = 0;
var cost = 5;
var increment = 1;
var jump = false;
var fall = false;
var eyeY = -42.5;
var isJumping = false;


function character() {
  stroke(cCR, cCG, cCB);
  fill(cCR, cCB, cCB);

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
  rect(25, eyeY, 5, 5); //Eye
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textAlign(CENTER);
  jumpAnimation();
}

function draw() {
  translate(200, 200) //puts (0,0) in the center of canvas
  //Negative, Up and Left, Positive, Down and Right

  background(backgroundColor);

  if (backgroundColor === 220) {
    noStroke();
    fill(173, 216, 230)
    rect(0, 0, 400,400);

  } else {
    noStroke();
    fill(50, 82, 123)
    rect(0, 0, 400,400);

  }



  for (let i = 200; i > -200; i = i - 10) {
    stroke(lineColor);
    line(i, -200, i, 200);
    line(-200, i, 200, i);
    stroke(centerColor);
    line(0, -200, 0, 200);
    line(-200, 0, 200, 0);
  }

  if (backgroundColor === 220) {
    noStroke();
    fill(255, 255, 0)
    rect(-140, -110, 30,30);
    fill(11, 102, 35);
    rect(0,100,400,200);
    fill(255);
  } else {
    noStroke();
    fill(190, 194, 203)
    rect(140, -110, 30,30);
    fill(58, 95, 11);
    rect(0,100,400,200);
    fill(255);
  }

  //UI
  rect(0, 50, 100, 50); //Jump
  fill(0);
  textSize(15);
  text('UPGRADE', 0, 55);

  textSize(12);

  fill(255);
  rect(125, 50, 100, 50); //Cost
  fill(0);
  text('COST', 125, 45);
  text(cost, 125, 65);

  fill(255);
  rect(-125, 50, 100, 50); //Funds
  fill(0);
  text('FUNDS', -125, 45);
  text(funds, -125, 65);

  fill(0);
  noStroke();
  rect(0, -175, 400, 50);
  rect(0, 175, 400, 50);
  rect(-200, 0, 10, 400);
  rect(200, 0, 10, 400);
  rect(0, 200, 400, 10);
  stroke(0);

  textSize(20);
  fill(255);
  text('Press Space to Jump and Earn Money!', 0, -170);
  text('Enter = Background Change', 0, 170);
  text('Shift = Character Color Change', 0, 190);

  if(jump){
      legY = legY - 1;
      console.log(legY);
      headY = headY - 1;
      snoutY = snoutY - 1;
      earY = earY - 1;
      bodyY = bodyY - 1;
      tailBaseY = tailBaseY - 1;
      tailY = tailY - 1;
      eyeY = eyeY - 1;
      jumpHeight ++;
      if(jumpHeight > jumpTop){
        fall=true;
        jump=false;
      }
  }


  if(fall){
        legY = legY + 1;
        headY = headY + 1;
        snoutY = snoutY + 1;
        earY = earY + 1;
        bodyY = bodyY + 1;
        tailBaseY = tailBaseY + 1;
        tailY = tailY + 1;
        eyeY = eyeY + 1;
        jumpHeight--;
        if(jumpHeight <= 0){
          fall = false;
          isJumping = false;
        }
  }



  character();
}

function jumpAnimation() {

  if(!isJumping){
    isJumping = true;
    jump = true;
    jumpHeight = 0;
    funds = funds + increment;
    // setInterval(function () {
    //   jump = false;
    //   fall=true;
    //   setInterval(function () {
    //     fall = false;
    //     isJumping = false;
    //   }, 1000);
    // }, 1000);
  }


  // console.log("JUMP!");
  // for (let j = 0; j < jumpHeight; j++) {
  //   legY = legY - 100;
  //   headY = headY - 100;
  //   snoutY = snoutY - 100;
  //   earY = earY - 100;
  //   bodyY = bodyY - 100;
  //   tailBaseY = tailBaseY - 100;
  //   tailY = tailY - 100;
  //   console.log("jumping  = " + j);
  // }
  //
  //
  //
  //
  //   for (let j = 0; j < jumpHeight; j++) {
  //     legY = legY + 100;
  //     headY = headY + 100;
  //     snoutY = snoutY + 100;
  //     earY = earY + 100;
  //     bodyY = bodyY + 100;
  //     tailBaseY = tailBaseY + 100;
  //     tailY = tailY + 100;
  //   }


  // frameRate(30);
}

function mouseClicked() {
  if (mouseX > -50 && mouseX < 50 && mouseY > 75 && mouseY < 125) {
    if (funds - costs >= 0) {
      jumpTop = jumpTop + 1;
      funds = funds - cost;
      cost = cost + 5;
      increment = increment + 1;
    }
  }
}

function keyTyped() {
  if (keyCode == 32) {
    jumpAnimation();

  }
  if (keyCode == 13) {
    if (backgroundColor == 220) {
      backgroundColor = 100;
      lineColor = 0;
      centerColor = 255;
    } else if (backgroundColor == 100) {
      backgroundColor = 220;
      lineColor = 255;
      centerColor = 0;
    }
  }
  if (keyCode == 16) {
    cCR = random(0, 255);
    cCG = random(0, 255);
    cCB = random(0, 255);
  }
}
