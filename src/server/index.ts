import http from 'http';
import events from './events';
import server from './server';

const port = server.get('port');

events.bind(
    http.createServer(server).listen(port)
);