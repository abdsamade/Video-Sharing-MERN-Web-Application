import jwt from 'jsonwebtoken';

import {createError} from './error.js';


export const verifyToken = (req,res, next) => {
    const token = req.cookies.token;
    if(!token) return createError(401,"you are not authenticated !");

    jwt.verify(token,process.env.JWT,(error,user) => {
        if(error) return createError(401,"Token is not valid !");
        req.user = user;

        next();
    })
}