var past,pastImg,present,presentImg,future,futureImg,next,nextImg,dos,dosImg,touches




function preload(){
pastImg = loadImage("pa.jpeg")  
presentImg = loadImage("pre.jpeg")
futureImg = loadImage("fut.jpeg")
nextImg = loadImage("WhatsApp Image 2021-12-11 at 3.32.14 AM.jpeg")
dosImg = loadImage("dos.jpeg")

}

function setup() {
  createCanvas(360, 640);
  past = createSprite(180,100)
  past.addImage(pastImg)
  past.scale = 0.3
  
  present = createSprite(180,320)
  present.addImage(presentImg)
  present.scale = 0.28
  
  future = createSprite(180,530)
  future.addImage(futureImg)
  future.scale = 0.3
  
  next = createSprite(280,600)
  next.addImage(nextImg)
  next.scale = 0.2
  
}

function draw() {
  background(180);
  if((touches.length>0 || mousePressedOver(next))) {
      past.visible = false
      present.visible = false
      future.visible = false
      next.visible = false
       dos = createSprite(180,320)
       dos.addImage(dosImg)
       dos.scale = 1
      touches = [];
    }


   
drawSprites()  
}



