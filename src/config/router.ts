import express from 'express';
import http from 'http';
import UserRouter from '../components/User/router';

export = {

    init(app: express.Application) : void{
        const router = express.Router();  
        
        app.use('/v1/users', UserRouter);

        app.use((req, res, next) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        app.use(router);
    }   
}