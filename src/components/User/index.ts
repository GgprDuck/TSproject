import UserServise from './service';
import UserValidation from './validation';
import ValidationError from '../../error/ValidationError';
import express from 'express';

async function findAll(req:express.Request, res:express.Response, next:express.NextFunction) : Promise < void >{
    try {
        const users = await UserService.findAll();

        res.status(200).json({
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            details: null,
        });

        next(error);
    }
}

async function findById(req:express.Request, res:express.Response, next:express.NextFunction) : Promise < string > {
    try {
        const { error } = UserValidation.findById(req.params);

        if (error) {
            throw new ValidationError(error.details);
        }

        const user = await UserService.findById(req.params.id);

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                error: error.name,
                details: error.message,
            });
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}