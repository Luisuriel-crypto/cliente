function validarForma(forma) {
    var idProducto = forma.idProducto;
    if (idProducto.value == "" || idProducto.value == "idProdcucto") {
        alert("Debe proporcionar un identificador de Producto");
        idProducto.focus();
        idProducto.select();
        return false;
    }

    var nombre = forma.nombre;
    if(nombre.value == "" || nombre.value == "Nombre"){
      alert("Debe proporcionar el nombre del Producto");
      nombre.focus();
      nombre.select();
      return false;
    }

    var precioU = forma.precioU;
    if(precioU.value == "" || precioU.value == "Precio Unitario"){
      alert("Debe proporcionar el precio unitario del producto");
      precioU.focus();
      precioU.select();
      return false;
    }

    alert("Formulario valido, enviando datos al servidor");
    return true;
}