var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;


var bg;
var superman, sad_superman, vic1_superman, vic2_superman;
var supermanImg, sad_supermanImg, vic1_supermanImg, vic2_supermanImg;
var superwoman, sad_superwoman, vic1_superwoman, vic2_superwoman;
var superwomanImg, sad_superwomanImg, vic1_superwomanImg, vic2_superwomanImg;
var evilqueen, evilqueen_angry;
var evilqueenImg, evilqueen_angryImg;
var sapling;
var saplingImg;
var arrow;
var arrowImg;
var brokentree_Img;
var brokentree;


function preload() {
  bg = loadImage("./assests/back.jpg");
  supermanImg = loadImage("./assests/superman.png");
  sad_supermanImg = loadImage("./assests/superman_sad.png");
  vic1_supermanImg = loadImage("./assests/superman_win_1.png");
  vic2_supermanImg = loadImage("./assests/superman_win_2.png");
  superwomanImg = loadImage("./assests/superwoman.png");
  sad_superwomanImg = loadImage("./assests/superwoman_sad.png");
  vic1_superwommanImg = loadImage("./assests/superwoman_win_1.png");
  vic2_superwomanImg = loadImage("./assests/superwoman_win_2.png");
  evilqueenImg = loadImage("./assests/evil_queen.png");
  evilqueen_angryImg = loadImage("./assests/evil_queen_angry.png");
  sapplinImg = loadImage("./assests/saplings.png");
  arrowImg = loadImage("./assests/arrow.png");
  brokentree_Img = loadImage("./assests/broken_tree.png");
}


function setup() {
  createCanvas(800,400);

  superman = createSprite(570,300,400,20);
  superman.addImage(supermanImg);
  superman.scale = 0.5;


  superwoman = createSprite(650,300,400,20);
  superwoman.addImage(superwomanImg);
  superwoman.scale = 0.5;

  evilqueen = createSprite(100,300,400,20);
  evilqueen.addImage(evilqueenImg);
  evilqueen.scale = 0.5;


 quiz = new Quiz();
 quiz.getState();
 quiz.start();
}


function draw() {
  background(bg);
  
  if (gameState === PLAY){
    quiz.play();
  }
  instructions_pop();
  drawSprites();
}


function instructions_pop(){
  swal({ 
    title: `Instructions`, 
    text: "First you have to try to answer the questions that pop up on your screen. Each level will contain 10 questions. If you answer the question currectly, you will have a chance to try out your archery skills, and you will be given a chance to take a life away from the evil queen, who's motive is to cut down all the trees and destroy this planet. The evil queen has 10 lives. If you manage to take a life away with just the one arrow you are provided, a tree will be planted. If your answer to the question is wrong she will cut down a tree and you will loose a life out of your total 3 lives.", 
    imageUrl: "https://i.pinimg.com/736x/44/bb/77/44bb77eba9190f839970e10d9b01f978.jpg", 
    imageSize: "100x100", 
    confirmButtonText: "START" 
  });
}