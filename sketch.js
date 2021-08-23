var bg,bgImg;





function preload(){
  
  bgImg = loadImage("assets/starke3.jpg");
  
  
}

function setup() {

  
  createCanvas(displayWidth,displayHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 0.5


}

function draw() {
  background(0); 

  
  drawSprites();
  }


  