var spacer;

function setup() {
  createCanvas(720, 720);
  spacer = width / 6
  //frameRate(1);
}

function draw() {
  background(255);
  translate(spacer, spacer);
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      var x = spacer * i;
      var y = spacer * j;
      var d;

      //02A      
      //d = 20;

      //02B
      //d = 10 + i * 10;

      //02C
      //d = 10 + j * 10;

      //02D
      //d = 5+(j * 5)+(5 * i);

      //02E
      //d = random(80,100);

      //02F
      //d = random(20,200)

      //02G
      //d = map(dist(x+spacer,y+spacer,mouseX,mouseY),0,800,5,100);

      //02H
      d = map(dist(x + spacer, y + spacer, mouseX, mouseY), 0, 800, 100, 5);

      fill(0);
      noStroke();
      ellipse(x, y, d, d);
    }
  }

}