var bg,snowleaf,snowleaf1,boy;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  bg = loadImage("snow1.jpg");
  snowleaf = loadImage("snow4.webp");
  snowleaf1 = loadImage("snow5.webp");
  boy = loadImage("boy.png");
}

function draw() {
  background(0); 
 image(bg ,0 ,0 ,800 ,400);
 image(snowleaf,50,50,100,100);
 image(snowleaf1,220,220,100,100);
 image(boy,200,200,100,100); 
 
 drawSprites();
}