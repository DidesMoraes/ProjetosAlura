// variavel da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// variavel da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

// variavel da raquete oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;
let chanceDeErrar = 0;

// Velocidade da Bolinha
let velocidadexbolinha = 5;
let velocidadeybolinha = 5;

// variavel colisão usando biblioteca p5.collide2d.js
let colidiu = false

// variavel do placar
let meusPontos = 0;
let pontosDoOponente = 0;


// Sons do jogo
  let ponto
  let trilha
  let raquetada

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function preload (){
  trilha = loadSound ( "trilha.mp3");
  ponto = loadSound ( "ponto.mp3");
  raquetada = loadSound ( "raquetada.mp3");
}

function draw() {
  background(0);
  mostraBolinha ();
  velocidadeBolinha ();
  colisaoBolinha ();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  movimentaRaqueteOponente();
  //verificacolisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPontos ();
  calculaChanceDeErrar();
  minhabolinhaNaoFicaPresa();
  oponentebolinhaNaoFicaPresa();
}
function mostraBolinha(){
  circle (xBolinha,yBolinha,diametro);
}

function velocidadeBolinha (){
  xBolinha += velocidadexbolinha;
  yBolinha += velocidadeybolinha;
}

function colisaoBolinha (){
 if (xBolinha + raio > width ||
     xBolinha - raio < 0) { 
    velocidadexbolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha  - raio < 0) {
      velocidadeybolinha *= -1;
      } 
}
function mostraRaquete (x,y){
  rect( x, y, comprimentoRaquete, alturaRaquete);

}
function movimentaRaquete (){
  if (keyIsDown(UP_ARROW))
    yRaquete -= 10;

if (keyIsDown(DOWN_ARROW)) 
    yRaquete += 10;
}
function verificacolisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete
      &&
     yBolinha - raio < yRaquete + alturaRaquete
      &&
     yBolinha + raio > yRaquete){
    velocidadexbolinha *=-1;
    raquetada.play();
  }
  }
function verificaColisaoRaquete ( x ,y){
 colidiu=
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
      velocidadexbolinha *=-1;
    raquetada.play();

      }
}
function movimentaRaqueteOponente (){
 velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 50 
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar

}
function incluiPlacar(){
  stroke (255);
  textAlign (CENTER)
  textSize (16)
  fill (color (255, 140, 0));
  rect (130, 10, 40, 20)
  fill (color (255, 140, 0));
  rect (430, 10, 40, 20);
  fill (255)
  text (meusPontos, 150, 26);
  fill (255)
  text (pontosDoOponente, 450, 26);

}
function marcaPontos (){
  if (xBolinha > 590){
      meusPontos +=1;
    ponto.play();
   }
  if (xBolinha < 10) {
    pontosDoOponente +=1;
      ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 80){
    chanceDeErrar = 50
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 80){
    chanceDeErrar = 35
    }
  }
}
function minhabolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
function oponentebolinhaNaoFicaPresa(){
    if (xBolinha - raio > 590){
    xBolinha = 580
    }
}