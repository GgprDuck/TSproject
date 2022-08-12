import UserServise, { create, deleteById, updateById } from './service';
import UserValidation from './validation';
import ValidationError from '../../error/ValidationError';
import express from 'express';

async function findAll(req:express.Request, res:express.Response, next:express.NextFunction,) : Promise<void> {
    try {
        const users = await UserServise.findAll();

        res.status(200).json({
            data: users,
        });
    } catch (error:any) { //??
        res.status(500).json({
            error: error.message,
            details: null,
        });

        next(error);
    }
}

async function findById(req:express.Request, res:express.Response, next:express.NextFunction) : Promise<void>  {
    try {
        const { error } = UserValidation.findById(req.params);

        if (error) {
            throw new ValidationError(error.details);
        }

        const user = await UserServise.findById(req.params.id);

        res.status(200).json({
            data: user,
        });
    } catch (error:any) {
        if (error instanceof ValidationError) {
             res.status(422).json({
                error: error.name,
                details: error.message,
            });
            return
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }

    async function create(req:express.Request, res:express.Response, next:express.NextFunction) : Promise<void> {
        try {
            const { error } = UserValidation.create(req.body);
    
            if (error) {
                throw new ValidationError(error.details);
            }
    
            const user = await UserServise.create(req.body);
    
            res.status(200).json({
                data: user,
            });
        } catch (error:any) {
            if (error instanceof ValidationError) {
                 res.status(422).json({
                    message: error.name,
                    details: error.message,
                });
                return
            }
    
            res.status(500).json({
                message: error.name,
                details: error.message,
            });
    
            return next(error);
        }
    }

    async function updateById(req:express.Request, res:express.Response, next:express.NextFunction) : Promise<void> {
        try {
            const { error } = UserValidation.updateById(req.body);
    
            if (error) {
                throw new ValidationError(error.details);
            }
    
            const updatedUser = await UserServise.updateById(req.body.id, req.body);
    
             res.status(200).json({
                data: updatedUser,
            });
        } catch (error:any) {
            if (error instanceof ValidationError) {
                 res.status(422).json({
                    message: error.name,
                    details: error.message,
                });
                return
            }
    
            res.status(500).json({
                message: error.name,
                details: error.message,
            });
    
            return next(error);
        }
    }

    async function deleteById(req:express.Request, res:express.Response, next:express.NextFunction) : Promise<void> {
        try {
            const { error } = UserValidation.deleteById(req.body);
    
            if (error) {
                throw new ValidationError(error.details);
            }
    
            const deletedUser = await UserServise.deleteById(req.body.id);
    
             res.status(200).json({
                data: deletedUser,
            });
        } catch (error:any) {
            if (error instanceof ValidationError) {
                 res.status(422).json({
                    message: error.name,
                    details: error.message,
                });
            return
            }
    
            res.status(500).json({
                message: error.name,
                details: error.message,
            });
    
            return next(error);
        }
    }
}

export = {
    findAll,
    findById,
    create,
    updateById,
    deleteById,
};