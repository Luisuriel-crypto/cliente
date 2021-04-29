package com.example.cliente;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import me.tell.ventas.EliminarVentaRequest;
import me.tell.ventas.EliminarVentaResponse;
import me.tell.ventas.ModificarVentaRequest;
import me.tell.ventas.ModificarVentaResponse;
import me.tell.ventas.MostrarVentaResponse;
import me.tell.ventas.RealizarVentaRequest;
import me.tell.ventas.RealizarVentaResponse;


@Endpoint
public class ClienteEndPoint {
    

  @Autowired
  private Icliente icliente;

  @PayloadRoot(namespace = "http://tell.me/ventas", localPart = "RealizarVentaRequest")

  @ResponsePayload
  public RealizarVentaResponse guardaVenta(@RequestPayload RealizarVentaRequest peticion) {

    RealizarVentaResponse respuesta = new RealizarVentaResponse();
    respuesta.setRespuesta("Venta Realizada " + peticion.getNombre());

    ClientesV clientesV = new ClientesV();
    clientesV.setNombre(peticion.getNombre());
    clientesV.setDescripcion(peticion.getDescripcion());
    clientesV.setPrecioU(peticion.getPrecioU());
    clientesV.setEnStock(peticion.getEnStock());
    icliente.save(clientesV);

    return respuesta;
  }

  @PayloadRoot(namespace = "http://tell.me/ventas", localPart = "MostrarVentaRequest")

    @ResponsePayload
    public MostrarVentaResponse dameventas(){
      MostrarVentaResponse respuesta = new MostrarVentaResponse();
    Iterable<ClientesV> listaVentas = icliente.findAll();

    for(ClientesV ls : listaVentas){
    
    MostrarVentaResponse.EmpleadoV saludador = new MostrarVentaResponse.EmpleadoV();
    saludador.setIdproducto(ls.getIdproducto());
    saludador.setNombre(ls.getNombre());
    saludador.setDescripcion(ls.getDescripcion());
    saludador.setPrecioU(ls.getPrecioU());
    saludador.setEnStock(ls.getEnStock());
    respuesta.getEmpleadoV().add(saludador);
  }
  return respuesta;
}

@PayloadRoot(namespace = "http://tell.me/ventas", localPart = "ModificarVentaRequest")

   @ResponsePayload
   public ModificarVentaResponse modificarsaludo(@RequestPayload ModificarVentaRequest peticion){
    ModificarVentaResponse respuesta = new ModificarVentaResponse();

      Optional<ClientesV> s = icliente.findById(peticion.getIdproducto());
      
      if(s.isPresent()){
        ClientesV productosv = new ClientesV();
          productosv = s.get();
          productosv.setNombre(peticion.getNombre());
          productosv.setPrecioU(peticion.getPrecioU());
          respuesta.setRespuesta("Se modifico " + peticion.getNombre());
        }else{
            respuesta.setRespuesta("Id no existe " + peticion.getIdproducto());
        } 
        return respuesta;
    }

  @PayloadRoot(namespace = "http://tell.me/ventas",localPart = "EliminarVentaRequest")

  @ResponsePayload
  public EliminarVentaResponse borrarsaludo(
    @RequestPayload EliminarVentaRequest peticion) {
    EliminarVentaResponse respuesta = new EliminarVentaResponse();
    respuesta.setRespuesta("Eliminado correctamente el id " + peticion.getId());
    //validad que no existe
    icliente.deleteById(peticion.getId());
    return respuesta;
  }
  
  
  }