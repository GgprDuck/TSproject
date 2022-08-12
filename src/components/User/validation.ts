import { ParamsDictionary } from "express-serve-static-core";
import Validation from "../validation";

class UserValidation extends Validation {
    static findById(params: ParamsDictionary): { error: any; } {
        throw new Error('Method not implemented.');
    }
    static create(body: any): { error: any; } {
        throw new Error('Method not implemented.');
    }
    static updateById(body: any): { error: any; } {
        throw new Error('Method not implemented.');
    }
    static deleteById(body: any): { error: any; } {
        throw new Error('Method not implemented.');
    }
    
    findById(data: object): void {
        return this.Joi
            .object({
                id: this.Joi.objectId(),
            })
            .validate(data);
    }

    create(profile:object): void {
        return this.Joi
            .object({
                email: this.Joi.string().email(),
                fullName: this.Joi
                    .string()
                    .min(1)
                    .max(30)
                    .required(),
            })
            .validate(profile);
    }

    updateById(data: object) :void {
        return this.Joi
            .object({
                id: this.Joi.objectId(),
                fullName: this.Joi
                    .string()
                    .min(1)
                    .max(30)
                    .required(),
            })
            .validate(data);
    }

    deleteById(data:object) :void {
        return this.Joi
            .object({
                id: this.Joi.objectId(),
            })
            .validate(data);
    }
}

export = UserValidation;