var edges;
var gameState = 0;
var database;
function setup(){
database = firebase.database();


  edges = createEdgeSprites();
 sofia = createSprite(380, 380, 20, 20);
 cup = createSprite(25, 20,40,40);
 cardboard1 = createSprite(390,335,150,25);
 cardboard2 = createSprite(275,385,25,150);
 cardboard3 = createSprite(245,363,75,25);
 cardboard4 = createSprite(385,285,25,75);
 cardboard5 = createSprite(290,223,25,95);
 cardboard6 = createSprite(326,210,75,25);
 cardboard7 = createSprite(240,256,100,25);
 cardboard8 = createSprite(34,102,100,25);
 cardboard9 = createSprite(140,35,25,100);
 cardboard10= createSprite(34,262,125,25);
 cardboard11= createSprite(85,210,25,100);
 cardboard12= createSprite(145,175,100,25);
 cardboard13= createSprite(125,315,100,25);
 cardboard14= createSprite(125,360,25,75);
 cardboard15= createSprite(203,135,25,100);
 cardboard16= createSprite(230,12,110,25);
 cardboard17= createSprite(272,69,25,100);
 cardboard18= createSprite(310,130,100,25);
 cardboard19= createSprite(365,65,100,25);
 cardboard20= createSprite(10,370,25,100);
 cardboard21= createSprite(10,150,25,100);
 cardboard22= createSprite(25,362,100,25);

 sofia.shapeColor="purple";
 cup.shapeColor="blue";
 
 cardboard1.shapeColor="darkgreen";
 cardboard2.shapeColor="darkgreen";
 cardboard3.shapeColor="darkgreen";
 cardboard4.shapeColor="darkgreen";
 cardboard5.shapeColor="darkgreen";
 cardboard6.shapeColor="darkgreen";
 cardboard7.shapeColor="darkgreen";
 cardboard8.shapeColor="darkgreen";
 cardboard9.shapeColor="darkgreen";
 cardboard10.shapeColor="darkgreen";
 cardboard11.shapeColor="darkgreen";
 cardboard12.shapeColor="darkgreen";
 cardboard13.shapeColor="darkgreen";
 cardboard14.shapeColor="darkgreen";
 cardboard15.shapeColor="darkgreen";
 cardboard16.shapeColor="darkgreen";
 cardboard17.shapeColor="darkgreen";
 cardboard18.shapeColor="darkgreen";
 cardboard19.shapeColor="darkgreen";
 cardboard20.shapeColor="darkgreen";
 cardboard21.shapeColor="darkgreen";
 cardboard22.shapeColor="darkgreen";
}
function draw() {
  background("lightgreen");
 
  
  
  if (sofia.isTouching(cup)) {
    gameState = 1;
 textSize(20);
 
  text("you win",200,200);
  
    sofia.velocityX=0;
    sofia.velocityY=0;
  }
 
   
  sofia.bounceOff(edges[0]);
  sofia.bounceOff(edges[1]);
  sofia.bounceOff(edges[2]);
  sofia.bounceOff(edges[3]);
  sofia.bounceOff(cardboard1);
  sofia.bounceOff(cardboard2);
  sofia.bounceOff(cardboard3);
  sofia.bounceOff(cardboard4);
  sofia.bounceOff(cardboard5);
  sofia.bounceOff(cardboard6);
  sofia.bounceOff(cardboard7);
  sofia.bounceOff(cardboard8);
  sofia.bounceOff(cardboard9); 
  sofia.bounceOff(cardboard10);
  sofia.bounceOff(cardboard11);
  sofia.bounceOff(cardboard12);
  sofia.bounceOff(cardboard13);
  sofia.bounceOff(cardboard14); 
  sofia.bounceOff(cardboard15);
  sofia.bounceOff(cardboard16);
  sofia.bounceOff(cardboard17);
  sofia.bounceOff(cardboard18);
  sofia.bounceOff(cardboard19);
  sofia.bounceOff(cardboard20);
  sofia.bounceOff(cardboard21);
  sofia.bounceOff(cardboard22);
   if(gameState === 1){
  database.ref('maze').set({
    maze : gameState
  })
  var x = document.createElement("A");
   var t = document.createTextNode("Tutorials"); 
   x.setAttribute("href", "https://dhritijs.github.io/Self-designed-game/index.html");
    x.appendChild(t); document.body.appendChild(x);
}
  
  

  


  if (keyDown(UP_ARROW)) {
  sofia.velocityX=0;
  sofia.velocityY=-3;
  }
  if (keyDown(DOWN_ARROW)) {
  sofia.velocityX=0;
  sofia.velocityY=3;
  }
  if (keyDown(LEFT_ARROW)) {
  sofia.velocityX=-3;
  sofia.velocityY=0;
  }
  if (keyDown(RIGHT_ARROW)) {
  sofia.velocityX=3;
  sofia.velocityY=0;
  }
    
  drawSprites();
  }
