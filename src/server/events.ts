import http from 'http';

function onError(error: NodeJS.ErrnoException) : void{
    if (error.syscall !== 'listen'){
        throw error;
    }
    
    switch (error.code){
    case 'EACCES':
        console.error('Port requires elevated privileges');
        process.exit(1);
    case 'EADDRINUSE':
        console.error('Port is already in use');
        process.exit(1);
    default:
        throw error;
    }
}

function onListening(this: any) : void{
    const addr = this.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;

    console.log(`Listening on ${bind}`);
}

function bind(this:any ,server: http.Server ) {
    server.on('error', (error) => this.onError.bind(server)(error));
    server.on('listening', this.onListening.bind(server));
}

export = {
    onError,
    onListening,
    bind,
}