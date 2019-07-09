
var cWidth = 400; // Variavel contendo a largura da tela
var cHeight = 300; // Variavel contendo a Altura da tela; Tambem usada para apagar a tela, preparando-a para o redesenho
var dIceX = 50; // Variavel contendo a posicao horizontal do unico dado; para apagar a tela preparand-para o redesenho
var dIceY = 25; // Variavel contendo a posicao vertical do unico dado
var dIceWidth = 100; // Variavel contendo a largura da face do dado
var dIceHeight = 100; // Variavel contendo a Altura da face do dado
var dotRad = 6; // Variavel contendo o raio de um ponto
var contexto1, contexto2, contexto3, contexto4; // Variavel contendo o CONTEXT da tela usada em todos os comandos "draw"
var dX; // Variavel usada para posicionamento horizontal modificada para cada uma das faces do dado
var dY; // Variavel usada para posicionamento vertical é mesma para ambas as faces do dado
var firstturn = true; // Variavel Global, inicializaca com valor verdadeiro
var puntos1, puntos2, puntos3, puntos4; // Variavel Global, nao precisa ser inicializaca porque ela sera definida antes de usar


function dados()
{    
    var soma, soma2, soma3, soma4;
    var ch = 1 + Math.floor(Math.random()*5);
    var ch2 = 1 + Math.floor(Math.random()*5);
    var ch3 = 1 + Math.floor(Math.random()*5);
    var ch4 = 1 + Math.floor(Math.random()*5);
    soma = ch;
    soma2 = ch2;
    soma3 = ch3;
    soma4 = ch4;
    dX = dIceX;
    dY = dIceY;
    drawFace(ch);
    drawFace2(ch2);
    drawFace3(ch3);
    drawFace4(ch4);
    dX = dIceX + 100;
    ch = 1 + Math.floor(Math.random()*5);
    ch2 = 1 + Math.floor(Math.random()*5);
    ch3 = 1 + Math.floor(Math.random()*5);
    ch4 = 1 + Math.floor(Math.random()*5);

    
    soma += ch;
    soma2 += ch2;
    soma3 += ch3;
    soma4 += ch4;
    
    drawFace(ch);
    drawFace2(ch2);
    drawFace3(ch3);
    drawFace4(ch4);
    
    puntos1 = soma;
    document.getElementById("puntos1").value = puntos1;

    puntos2 = soma2;
    document.getElementById("puntos2").value = puntos2;

    puntos3 = soma3;
    document.getElementById("puntos3").value = puntos3;

    puntos4 = soma4;
    document.getElementById("puntos4").value = puntos4;
}

function drawFace(n)
{
    contexto1 = document.getElementById("canvas1").getContext('2d');
    contexto1.lineWidth = 5;
    contexto1.clearRect(dX, dY, dIceWidth, dIceHeight);
    contexto1.strokeRect(dX, dY, dIceWidth, dIceHeight);
    
    var dotX;
    var dotY;
    
    
    contexto1.fillStyle = "#009966";
    
    switch(n)
    {
        case 1:
            draw1();
            break;
            
        case 2:
            draw2();
            break;
            
        case 3:
            draw2();
            draw1();
            break;
            
        case 4:
            draw4();
            break;
            
        case 5:
            draw4();
            draw1();
            break;
    }
}


function drawFace2(n)
{
    contexto2 = document.getElementById("canvas2").getContext('2d');
    contexto2.lineWidth = 5;
    contexto2.clearRect(dX, dY, dIceWidth, dIceHeight);
    contexto2.strokeRect(dX, dY, dIceWidth, dIceHeight);
    
    var dotX;
    var dotY;
    
    
    contexto2.fillStyle = "#009966";
    
    switch(n)
    {
        case 1:
            draw1Dos();
            break;
            
        case 2:
            draw2Dos();
            break;
            
        case 3:
            draw2Dos();
            draw1Dos();
            break;
            
        case 4:
            draw4Dos();
            break;
            
        case 5:
            draw4Dos();
            draw1Dos();
            break;
    }
}


function drawFace3(n)
{
    contexto3 = document.getElementById("canvas3").getContext('2d');
    contexto3.lineWidth = 5;
    contexto3.clearRect(dX, dY, dIceWidth, dIceHeight);
    contexto3.strokeRect(dX, dY, dIceWidth, dIceHeight);
    
    var dotX;
    var dotY;
    
    
    contexto3.fillStyle = "#009966";
    
    switch(n)
    {
        case 1:
            draw1Tres();
            break;
            
        case 2:
            draw2Tres();
            break;
            
        case 3:
            draw2Tres();
            draw1Tres();
            break;
            
        case 4:
            draw4Tres();
            break;
            
        case 5:
            draw4Tres();
            draw1Tres();
            break;
    }
}


function drawFace4(n)
{
    contexto4 = document.getElementById("canvas4").getContext('2d');
    contexto4.lineWidth = 5;
    contexto4.clearRect(dX, dY, dIceWidth, dIceHeight);
    contexto4.strokeRect(dX, dY, dIceWidth, dIceHeight);
    
    var dotX;
    var dotY;
    
    
    contexto4.fillStyle = "#009966";
    
    switch(n)
    {
        case 1:
            draw1Cua();
            break;
            
        case 2:
            draw2Cua();
            break;
            
        case 3:
            draw2Cua();
            draw1Cua();
            break;
            
        case 4:
            draw4Cua();
            break;
            
        case 5:
            draw4Cua();
            draw1Cua();
            break;
    }
}


function draw1()
{
    var dotX;
    var dotY;
    
    contexto1.beginPath(); // Inciar o caminho
    dotX = dX + .5*dIceWidth;
    dotY = dY + .5*dIceHeight;
    
    contexto1.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    contexto1.closePath(); // Fecha o caminho
    contexto1.fill();
}


function draw2()
{
    var dotX;
    var dotY;
    
    contexto1.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + 3*dotRad;
    
    contexto1.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+dIceHeight-3*dotRad;
    
    contexto1.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto1.closePath(); // Fecha o caminho
    contexto1.fill();
}

function draw4()
{
    var dotX;
    var dotY;
    
    contexto1.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + 3*dotRad;
    
    contexto1.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+dIceHeight-3*dotRad;
    
    contexto1.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto1.closePath(); // Fecha o caminho
    contexto1.fill();
    
    contexto1.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + dIceHeight-3*dotRad;
    
    contexto1.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+3*dotRad;
    
    contexto1.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto1.closePath(); // Fecha o caminho
    contexto1.fill();
}

function draw2mid()
{
    var dotX;
    var dotY;
    
    contexto1.beginPath(); // Inciar caminho
    
    dotX = dX + 3*dotRad;
    dotY = dY + .5*dIceHeight;
    
    contexto1.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX + dIceWidth - 3*dotRad;
    dotY = dY + .5*dIceHeight;
    
    contexto1.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto1.closePath(); // Fecha o caminho
    contexto1.fill();
}


function draw1Dos()
{
    var dotX;
    var dotY;
    
    contexto2.beginPath(); // Inciar o caminho
    dotX = dX + .5*dIceWidth;
    dotY = dY + .5*dIceHeight;
    
    contexto2.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    contexto2.closePath(); // Fecha o caminho
    contexto2.fill();
}


function draw2Dos()
{
    var dotX;
    var dotY;
    
    contexto2.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + 3*dotRad;
    
    contexto2.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+dIceHeight-3*dotRad;
    
    contexto2.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto2.closePath(); // Fecha o caminho
    contexto2.fill();
}

function draw4Dos()
{
    var dotX;
    var dotY;
    
    contexto2.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + 3*dotRad;
    
    contexto2.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+dIceHeight-3*dotRad;
    
    contexto2.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto2.closePath(); // Fecha o caminho
    contexto2.fill();
    
    contexto2.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + dIceHeight-3*dotRad;
    
    contexto2.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+3*dotRad;
    
    contexto2.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto2.closePath(); // Fecha o caminho
    contexto2.fill();
}

function draw2midDos()
{
    var dotX;
    var dotY;
    
    contexto2.beginPath(); // Inciar caminho
    
    dotX = dX + 3*dotRad;
    dotY = dY + .5*dIceHeight;
    
    contexto2.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX + dIceWidth - 3*dotRad;
    dotY = dY + .5*dIceHeight;
    
    contexto2.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto2.closePath(); // Fecha o caminho
    contexto2.fill();
}



function draw1Tres()
{
    var dotX;
    var dotY;
    
    contexto3.beginPath(); // Inciar o caminho
    dotX = dX + .5*dIceWidth;
    dotY = dY + .5*dIceHeight;
    
    contexto3.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    contexto3.closePath(); // Fecha o caminho
    contexto3.fill();
}


function draw2Tres()
{
    var dotX;
    var dotY;
    
    contexto3.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + 3*dotRad;
    
    contexto3.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+dIceHeight-3*dotRad;
    
    contexto3.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto3.closePath(); // Fecha o caminho
    contexto3.fill();
}

function draw4Tres()
{
    var dotX;
    var dotY;
    
    contexto3.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + 3*dotRad;
    
    contexto3.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+dIceHeight-3*dotRad;
    
    contexto3.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto3.closePath(); // Fecha o caminho
    contexto3.fill();
    
    contexto3.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + dIceHeight-3*dotRad;
    
    contexto3.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+3*dotRad;
    
    contexto3.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto3.closePath(); // Fecha o caminho
    contexto3.fill();
}

function draw2midTres()
{
    var dotX;
    var dotY;
    
    contexto3.beginPath(); // Inciar caminho
    
    dotX = dX + 3*dotRad;
    dotY = dY + .5*dIceHeight;
    
    contexto3.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX + dIceWidth - 3*dotRad;
    dotY = dY + .5*dIceHeight;
    
    contexto3.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto3.closePath(); // Fecha o caminho
    contexto3.fill();
}



function draw1Cua()
{
    var dotX;
    var dotY;
    
    contexto4.beginPath(); // Inciar o caminho
    dotX = dX + .5*dIceWidth;
    dotY = dY + .5*dIceHeight;
    
    contexto4.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    contexto4.closePath(); // Fecha o caminho
    contexto4.fill();
}


function draw2Cua()
{
    var dotX;
    var dotY;
    
    contexto4.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + 3*dotRad;
    
    contexto4.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+dIceHeight-3*dotRad;
    
    contexto4.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto4.closePath(); // Fecha o caminho
    contexto4.fill();
}

function draw4Cua()
{
    var dotX;
    var dotY;
    
    contexto4.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + 3*dotRad;
    
    contexto4.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+dIceHeight-3*dotRad;
    
    contexto4.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto4.closePath(); // Fecha o caminho
    contexto4.fill();
    
    contexto4.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + dIceHeight-3*dotRad;
    
    contexto4.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+3*dotRad;
    
    contexto4.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto4.closePath(); // Fecha o caminho
    contexto4.fill();
}

function draw2midCua()
{
    var dotX;
    var dotY;
    
    contexto4.beginPath(); // Inciar caminho
    
    dotX = dX + 3*dotRad;
    dotY = dY + .5*dIceHeight;
    
    contexto4.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX + dIceWidth - 3*dotRad;
    dotY = dY + .5*dIceHeight;
    
    contexto4.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto4.closePath(); // Fecha o caminho
    contexto4.fill();
}