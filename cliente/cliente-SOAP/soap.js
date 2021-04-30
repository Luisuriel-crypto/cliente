var ventas;

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

function visualizar() {
    verVentas = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<MostrarVentaResponse xmlns="http://tell.me/ventas">' +
        '</MostrarVentaRequest>' 
        '</Envelope>'
        console.log(verVentas);
}

function visualizarV(){
    visualizar()
    axios.get('http://localhost:8080/ws/venta', ventas, {
        
    })
}
  