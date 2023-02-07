import  Joi from 'joi';

export const createUserSchema = Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    price:Joi.number().required(),
    stock:Joi.number().required()
});