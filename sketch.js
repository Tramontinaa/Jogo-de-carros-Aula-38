var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var database;

var form;
var player;
var game;
var cars;
var car1;
var car2;
var car3;
var car4;
var car1Img
var car2Img
var car3Img
var car4Img
var trackImg
var groundImg
/////////////////

function preLoad() {
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png")
  car3Img = loadImage("images/car3.png")
  car4Img = loadImage("images/car4.png")
  trackImg = loadImage("images/track.jpg")
  groundImg = loadImage("images/ground.png")
}
function setup(){
 canvas = createCanvas(displayWidth -20,displayHeight -30 );

 database = firebase.database();

 game = new Game();
 game.getState();
 game.start();

}
/////////////////
function draw(){

    //Código adicionado pela professora para verificar se a quantidade de player é = a 4 e trocar o estado do jogo
    if(playerCount===4){
        game.update(1);
          }
        if(gameState===1){
        clear();
        game.play();
        
        }

}