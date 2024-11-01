import { Request, Response } from 'express'

export const getHello = async (req: Request, res: Response) => {
    return res.status(200).send({
        error: false,
        msg: 'Hello from the API!'
    })
}