var ventas;

function agregar() {
    ventas = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<RealizarVentaRequest xmlns="http://tell.me/ventas">' +
        '<nombre>' + document.getElementById('nombre').value + '</nombre>' +
        '<descripcion>' + document.getElementById('descripcion').value + '</descripcion>' +
        '<precio>' + document.getElementById('precioU').value + '</precio>' +
        '<producDis>' + document.getElementById('enStock').value + '</producDis>' +
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