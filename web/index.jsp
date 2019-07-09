<%-- 
    Document   : index
    Created on : 09-oct-2017, 20:12:16
    Author     : Usuario
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" media="all" href="css/custom.css">
        <script src="js/jquery-2.1.4.min.js"></script>
        <script src="js/excanvas.compiled.js"></script>
        <script src="js/dados.js"></script>
        <title>Dados Apuestas JSP</title>
    </head>
    <body>
        <div class="container">  
          <form method="post">
            <div class="flex">
                <div id="jugador-1" class="contact">
                    <h3>Jugador 1</h3>
                    <fieldset>
                      <input placeholder="Ingrese Su Nombre" type="text" id="name1" tabindex="1" required autofocus>
                    </fieldset>
                    <fieldset>
                      <input placeholder="Ingrese el Valor de su apuesta" type="text" id="apuesta1" tabindex="2" required>
                    </fieldset>
                    <fieldset>
                        <canvas id="canvas1" class="col-md-4"></canvas>
                    </fieldset>
                    <fieldset>
                        <label>Puntos:</label>
                        <input type="text" name="puntos1" id="puntos1" disabled="" disabled="">
                    </fieldset>
                    <fieldset>
                      <h3>Acumulado: </h3><h3 id="valor1" class="respuesta">10000</h3>
                    </fieldset>
                    <fieldset>
                        <div class="radio">
                          <label>
                            <input type="radio" name="opciones1" id="jugar1" value="1">
                            Realizar Apuesta
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input type="radio" name="opciones1" id="retirar1" value="2">
                            Retirarme del juego
                          </label>
                        </div>
                    </fieldset>
                </div>

                <div id="jugador-2" class="contact">
                    <h3>Jugador 2</h3>
                    <fieldset>
                      <input placeholder="Ingrese Su Nombre" type="text" id="name2" tabindex="1" required autofocus>
                    </fieldset>
                    <fieldset>
                      <input placeholder="Ingrese el Valor de su apuesta" type="text" id="apuesta2" tabindex="2" required>
                    </fieldset>
                    <fieldset>
                        <canvas id="canvas2" class="col-md-4"></canvas>
                    </fieldset>
                    <fieldset>
                        <label>Puntos:</label>
                        <input type="text" name="puntos2" id="puntos2" disabled="" disabled="">
                    </fieldset>
                    <fieldset>
                      <h3>Acumulado: </h3><h3 id="valor2" class="respuesta">10000</h3>
                    </fieldset>
                    <fieldset>
                        <div class="radio">
                          <label>
                            <input type="radio" name="opciones2" id="jugar2" value="1">
                            Realizar Apuesta
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input type="radio" name="opciones2" id="retirar2" value="2">
                            Retirarme del juego
                          </label>
                        </div>
                    </fieldset>
                </div>

                <div id="jugador-3" class="contact">
                    <h3>Jugador 3</h3>
                    <fieldset>
                      <input placeholder="Ingrese Su Nombre" type="text" id="name3" tabindex="1" required autofocus>
                    </fieldset>
                    <fieldset>
                      <input placeholder="Ingrese el Valor de su apuesta" type="text" id="apuesta3" tabindex="2" required>
                    </fieldset>
                    <fieldset>
                        <canvas id="canvas3" class="col-md-4"></canvas>
                    </fieldset>
                    <fieldset>
                        <label>Puntos:</label>
                        <input type="text" name="puntos3" id="puntos3" disabled="" disabled="">
                    </fieldset>
                    <fieldset>
                      <h3>Acumulado: </h3><h3 id="valor3" class="respuesta">10000</h3>
                    </fieldset>
                    <fieldset>
                        <div class="radio">
                          <label>
                            <input type="radio" name="opciones3" id="jugar3" value="1">
                            Realizar Apuesta
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input type="radio" name="opciones3" id="retirar3" value="2">
                            Retirarme del juego
                          </label>
                        </div>
                    </fieldset>
                </div>

                <div id="jugador-4" class="contact">
                    <h3>Jugador 4</h3>
                    <fieldset>
                      <input placeholder="Ingrese Su Nombre" type="text" id="name4" tabindex="1" required autofocus>
                    </fieldset>
                    <fieldset>
                      <input placeholder="Ingrese el Valor de su apuesta" type="text" id="apuesta4" tabindex="2" required>
                    </fieldset>
                    <fieldset>
                        <canvas id="canvas4" class="col-md-4"></canvas>
                    </fieldset>
                    <fieldset>
                        <label>Puntos:</label>
                        <input type="text" name="puntos4" id="puntos4" disabled="" disabled="">
                    </fieldset>
                    <fieldset>
                      <h3>Acumulado: </h3><h3 id="valor4" class="respuesta">10000</h3>
                    </fieldset>
                    <fieldset>
                        <div class="radio">
                          <label>
                            <input type="radio" name="opciones4" id="jugar4" value="1">
                            Realizar Apuesta
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input type="radio" name="opciones4" id="retirar4" value="2">
                            Retirarme del juego
                          </label>
                        </div>
                    </fieldset>
                </div>

            <div>
                <fieldset>
                  <button name="submit" type="submit" id="submit" data-submit="...Sending">Jugar Ahora</button>
                </fieldset>
            </div>
          </form>
        </div>
        <script src="js/global.js"></script>
    </body>
</html>
