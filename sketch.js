var question;
var op1;
var op2;
var rightOption;
var canvas;
var score = 0;
var frameTime = 60;
var btn1, btn2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  randomQuestion();

  btn1=new Btn(1,200,450);
  btn2=new Btn(2,600,450);
}

function draw() {
  background(0);

  drawSprites();

  textSize(24);
  fill("white")
  text("SCORE:" + score, 100, canvas.height/6);
  text(question, 100, canvas.height/4);
  
  text(op1, 100, 450);
  text(op2, 500, 450);

  btn1.display();
  btn2.display();
}

function randomQuestion(){
  var rand = round(random(1,5));

  if(rand == 1){
    question = "¿Cual es el mejor tipo de respuesta?";
    op1 = "De Escape";
    op2 = "De Paz";
    rightOption = 2;
  }
  else if(rand == 2){
    question = "La discrimacion es un problema que sigue presente actualmente";
    op1 = "Sí";
    op2 = "No";
    rightOption = 1;
  }
  else if(rand == 3){
    question = "Si una persona esta en una situacion complicada tu debes...";
    op1 = "Dejarla ahí";
    op2 = "Ayudarla";
    rightOption = 2;
  }
  else if(rand == 4){
    question = "¿Cuántos caminos hay en la loma resbaladiza?";
    op1 = "5";
    op2 = "3";
    rightOption = 2;
  }
  else if(rand == 5){
    question = "¿Como se arregla un problema?";
    op1 = "Hablando y debatiendo";
    op2 = "Buscando a alguien que decida";
    rightOption = 1;
  }
}

function resetQuestion(){
  question = "";
  op1 = "";
  op2 = "";
  rightOption = 0;
}