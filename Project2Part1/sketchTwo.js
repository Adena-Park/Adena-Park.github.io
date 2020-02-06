var sizeX = 50;
var sizeY = 50;
var coorX = 100;
var coorY = 100;
var i = 0;

function setup() {
  frameRate(10);
  createCanvas(400, 400);
  background(210);
  angleMode(DEGREES);


}

function draw() {

  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);

  translate(200, 200);

  var a = (360 - mouseX);



  rotate(a);

  noFill();
  stroke(r, g, b);

  quad(50, 50, 80, 90, 90, 120, 50, 80);
  quad(-50, -50, -80, -80, -90, -120, -50, -80);

  quad(25, 25, 40, 45, 45, 60, 25, 40);
  quad(-25, -25, -40, -45, -45, -60, -25, -40);

  quad(13, 13, 20, 23, 23, 30, 13, 20);
  quad(-13, -13, -20, -23, -23, -30, -13, -20);

  quad(6, 6, 10, 11, 11, 15, 6, 10);
  quad(-6, -6, -10, -11, -11, -11, -6, -10);
  
  // for (let i = -200; i < 200; i++) {
  //   fill(0);
  //   line(-200,i+1,200, i+1);
  //   nostroke();
  //   fill(210);
  //   quad(-200, i, 200, i, 200,-200, -200, -200);
  // }
  stroke(r, g, b);


  ellipse(0, 0, 15, 15);


}

function keyTyped() {
  if (keyCode == 'ENTER') {
    background(210);
  }
}

  function mouseClicked() {
  noLoop();
}
