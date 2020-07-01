var form, player, game;
var canvas;
var bgimg;
var database;
var gamestate=0;
var playercount;


function setup(){
  canvas=createCanvas(400,400);
  database = firebase.database();
  console.log(database);

}

function draw(){
  background("white");
  
  
    
    drawSprites();
  
}

