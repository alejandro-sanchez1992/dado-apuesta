/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import Clases.Jugador1;
import Clases.Jugador2;
import Clases.Jugador3;
import Clases.Jugador4;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Usuario
 */
@WebServlet(name = "servletDado", urlPatterns = {"/servletDado"})
public class servletDado extends HttpServlet {
    
    public String jugador1, jugador2, jugador3, jugador4;
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            try {

                String nombreJ1, nombreJ2, nombreJ3, nombreJ4;
                int numDadoJ1, estadoJ1, numDadoJ2, estadoJ2, numDadoJ3, estadoJ3, numDadoJ4, estadoJ4;
                double apuestaJ1, acumuladoJ1, apuestaJ2, acumuladoJ2, apuestaJ3, acumuladoJ3, apuestaJ4, acumuladoJ4;
                
                Jugador1 jug1 = new Jugador1();
                Jugador2 jug2 = new Jugador2();
                Jugador3 jug3 = new Jugador3();
                Jugador4 jug4 = new Jugador4();
                
                servletDado datos = new servletDado();
                Gson gson = new Gson();
                String jsonOutput;

                nombreJ1 = request.getParameter("nombre1");
                apuestaJ1 = Double.parseDouble(request.getParameter("apuesta1"));
                numDadoJ1 = Integer.parseInt(request.getParameter("puntos1"));
                estadoJ1 = Integer.parseInt(request.getParameter("opciones1"));
                
                acumuladoJ1 = Double.parseDouble(request.getParameter("valor1"));
                
                
                nombreJ2 = request.getParameter("nombre2");
                apuestaJ2 = Double.parseDouble(request.getParameter("apuesta2"));
                numDadoJ2 = Integer.parseInt(request.getParameter("puntos2"));
                estadoJ2 = Integer.parseInt(request.getParameter("opciones2"));
                
                acumuladoJ2 = Double.parseDouble(request.getParameter("valor2"));
                
                
                nombreJ3 = request.getParameter("nombre3");
                apuestaJ3 = Double.parseDouble(request.getParameter("apuesta3"));
                numDadoJ3 = Integer.parseInt(request.getParameter("puntos3"));
                estadoJ3 = Integer.parseInt(request.getParameter("opciones3"));
                
                acumuladoJ3 = Double.parseDouble(request.getParameter("valor3"));
                
                
                nombreJ4 = request.getParameter("nombre4");
                apuestaJ4 = Double.parseDouble(request.getParameter("apuesta4"));
                numDadoJ4 = Integer.parseInt(request.getParameter("puntos4"));
                estadoJ4 = Integer.parseInt(request.getParameter("opciones4"));
                
                acumuladoJ4 = Double.parseDouble(request.getParameter("valor4"));
                

                jug1.setNombre(nombreJ1);
                jug1.setApuesta(apuestaJ1);
                jug1.setNumDado(numDadoJ1);
                jug1.setEstado(estadoJ1);
                jug1.setAcumulado(acumuladoJ1);
                
                jug2.setNombre(nombreJ2);
                jug2.setApuesta(apuestaJ2);
                jug2.setNumDado(numDadoJ2);
                jug2.setEstado(estadoJ2);
                jug2.setAcumulado(acumuladoJ2);
                
                jug3.setNombre(nombreJ3);
                jug3.setApuesta(apuestaJ3);
                jug3.setNumDado(numDadoJ3);
                jug3.setEstado(estadoJ3);
                jug3.setAcumulado(acumuladoJ3);
                
                jug4.setNombre(nombreJ4);
                jug4.setApuesta(apuestaJ4);
                jug4.setNumDado(numDadoJ4);
                jug4.setEstado(estadoJ4);
                jug4.setAcumulado(acumuladoJ4);

                datos.jugador1 = String.valueOf(jug1.Jugar());

                jsonOutput = gson.toJson(datos);
                out.println(jsonOutput);
                //out.println(jug2.Jugar());
                //out.println(jug3.Jugar());
                //out.println(jug4.Jugar());
            }
            catch(Exception e) {
                out.print(e);
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
