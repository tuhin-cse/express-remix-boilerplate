import {Request, Response, NextFunction} from "express";

export const getHelloMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    next()
}