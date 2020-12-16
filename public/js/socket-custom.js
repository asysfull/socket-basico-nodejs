var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
})
socket.on('disconnect', function() {
    console.log('se perdio conexion con el servidor');
})

// emit => enviar informacion
socket.emit('sendmsg', {
    usuario: 'Amador',
    msg: 'hola mundo'
});
// function(res) {
//     console.log('respuesta del server:', res);
// });

socket.on('sendmsg', function(message) {
    console.log('data: ', message);
})