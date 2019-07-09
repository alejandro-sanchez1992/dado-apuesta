/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases;

/**
 *
 * @author Usuario
 */
public class Jugador4 {

    private String nombre;
    private double apuesta;
    private double acumulado;
    private int numDado;
    private int estado;
    
        public Jugador4() {
        this.nombre = "";
        this.apuesta = 0;
        this.numDado = 0;
        this.estado = 0;
    }
        
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getApuesta() {
        return apuesta;
    }

    public void setApuesta(double apuesta) {
        this.apuesta = apuesta;
    }

    public int getNumDado() {
        return numDado;
    }

    public void setNumDado(int numDado) {
        this.numDado = numDado;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }
    
    public double getAcumulado() {
        return acumulado;
    }

    public void setAcumulado(double acumulado) {
        this.acumulado = acumulado;
    }
    
    public double Jugar(){
        double acumulado = 0;
        double auxAcum = 10000;
        
        if (this.estado == 1) {
            if (this.numDado % 2 == 0) {
                this.apuesta = (this.apuesta * 2) + this.acumulado;   
            }
            else {
                this.apuesta = (this.apuesta * 3) + this.acumulado;
            }
        }
        else {
           this.apuesta = this.acumulado;
           this.estado = 0;
        }
        return this.apuesta;
    }
}
