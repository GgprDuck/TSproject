import Joi from 'Joi';
import {Types} from 'mongoose';

class Validation {
    messageObjectId: string;
    Joi: any;

    constructor(messageObjectId: string){
        this.messageObjectId = 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters';
        this.Joi = Joi.extend({
            type: 'objectId',
            messages: {
                'objectId.base': this.messageObjectId,
            },

            validate(value, helpers) {
                if (!Types.ObjectId.isValid(value)) {
                    return {
                        value,
                        errors: helpers.error('objectId.base'),
                    };
                }
                return {
                    value,
                };
            },
        });
    }
};

export = Validation;