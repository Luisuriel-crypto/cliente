var ventas;
var elimp;
var mod;

function agregar() {
    ventas = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<RealizarVentaRequest xmlns="http://tell.me/ventas">' +
        '<nombre>' + document.getElementById('nombre').value + '</nombre>' +
        '<descripcion>' + document.getElementById('descripcion').value + '</descripcion>' +
        '<precioU>' + document.getElementById('precioU').value + '</precioU>' +
        '<enStock>' + document.getElementById('enStock').value + '</enStock>' +
        '</RealizarVentaRequest>' +
        '</Body>' +
        '</Envelope>'
}
function venta() {
    agregar()
    axios.post('http://localhost:8080/ws/venta', ventas, {
        headers: {
            'Content-Type': 'text/xml',
            'SOAPAction': ''
        },
    })
    alert("Registrado correctamente");
    location.href = "/cliente/cliente-SOAP/html/RealizarVenta.html"
}
/**ELIMINAR */
function eliminar() {
    elimp = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<EliminarVentaRequest xmlns="http://tell.me/ventas">' +
        '<id>' + document.getElementById('id').value + '</id>' +
        '</EliminarVentaRequest>' +
        '</Body>' +
        '</Envelope>'
}

function idElim() {
    eliminar()
    axios.post('http://localhost:8080/ws/venta', elimp, {
        headers: {
            'Content-Type': 'text/xml',
            'SOAPAction': ''
        },
    })
    alert("Eliminado correctamente");
    location.href = "/cliente/cliente-SOAP/html/Eliminar.html"
}


