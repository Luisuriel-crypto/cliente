var ventas;
var elimp;

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
}

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
}


/*function visualizar() {
    verVentas = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<MostrarVentaRequest xmlns="http://tell.me/ventas">' +

        '</MostrarVentaRequest>'
        '</Envelope>'
}
function visualizarV(){
    visualizar()
    axios.post('http://localhost:8080/ws/venta', ventas, {
        headers: {
            'Content-Type': 'text/xml',
            'SOAPAction': ''
        },
    })

}*/