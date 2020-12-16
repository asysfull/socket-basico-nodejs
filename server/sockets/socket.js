module.exports.SocketDev = (io) => {

    io.on('connection', (client) => {
        console.log(`nuevo usuario conectado`);

        client.emit('sendmsg', {
            usuario: 'Admin',
            msg: 'Bienvenido a la aplicacion'
        });

        client.on('disconnect', () => {
            console.log(`Usuario desconectado`);
        });

        // escuchar cliente
        client.on('sendmsg', (message, callback) => {
            console.log(message);
            client.broadcast.emit('sendmsg', message);

            // if (message.usuario) {
            //     callback({
            //         ok: true,
            //         message: 'todo salió bien'
            //     })
            // } else {
            //     callback({
            //         ok: false,
            //         message: 'todo salió mal'
            //     })
            // }
        })
    })
}