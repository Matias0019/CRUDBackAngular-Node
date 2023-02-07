import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import { createUserSchema } from "../schemas/productjoi.schema";

export const schemaValidation = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try{
    schema.parse({
        body: req.body,
        params: req.params,
    });
    next();
    } catch(error) {
        if (error instanceof ZodError) {
            return res
                .status(400)
                .json(error.issues.map((issue) => ({ path: issue.path, message: issue.message})));
        }
        return res.status(400).json({message: "internal server error"});
    }
}

export const validatorUser =(req:Request,res:Response,next:NextFunction):void =>{

    if(createUserSchema.validate(req.body).error){
        res.status(400).send({message: createUserSchema.validate(req.body).error?.message})
    }else{
        next()
    }
}