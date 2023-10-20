let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 25;
let raioBolinha= diametroBolinha/2;

let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
let xRaquete = 3;
let yRaquete = 160;
let xRaqueteInimigo = 580;
let yRaqueteInimigo = 200;
let larguraRaquete = 10;
let alturaRaquete = 80;
let velocidadeRaquete = 5;

let colisao = false


function setup() {

  createCanvas(600, 400);
}

function draw() {
  
  background(0);
  
  criarBolinha ();
  movimentoBolinha ();
  encostaNaBorda();
  criarRaquete(xRaquete, yRaquete);
  criarRaquete(xRaqueteInimigo, yRaqueteInimigo)
  movimentaRaquete();
  movimentaRaqueteInimigo();
  colideRaqueteBolinha (xRaqueteInimigo, yRaqueteInimigo)
  colideRaqueteInimigo (xRaqueteInimigo, yRaqueteInimigo)
  
}

 function criarBolinha (){
 circle (xBolinha, yBolinha, diametroBolinha)

 }

function movimentoBolinha (){
 xBolinha += velocidadeXBolinha;
 yBolinha += velocidadeYBolinha;

}

function encostaNaBorda () {
  if (xBolinha+raioBolinha > width || xBolinha - raioBolinha < 0){
   velocidadeXBolinha *= -1
  }

  if (yBolinha+raioBolinha > height || yBolinha-raioBolinha  < 0) {
   velocidadeYBolinha *= -1< 0
  }
}

function criarRaquete (x, y){
  rect(x, y, larguraRaquete, alturaRaquete)
  
}
  
  function movimentaRaquete(){
  
 if (keyIsDown(UP_ARROW)){ xRaqueteInimigo += velocidadeRaquete}
  if(keyIsDown(DOWN_ARROW)){ yRaqueteInimigo += velocidadeRaquete}
  
  }
    function colideRaqueteBolinha (x, y){
   colisao = colideRectCircle (x, y,larguraRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
   if(colisao){
   velocidaadeXBolinha *= -1

   }
    }

 function movimentaRaqueteInimigo () {
  if(keyIsDown(87)){
  yRaqueteInimigo -= velocidadeRaquete
  }
   if (keyIsDown(83)){
    yRaqueteInimigo += velocidadeRaquete
     }
    }