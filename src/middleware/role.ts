import { NextFunction, Request, Response } from 'express'
import { RequestExt } from '../interfaces/requestExt.interface';

const checkRole = (roles: string[]) => ( req: RequestExt, res: Response, next: NextFunction ) => {
    try {
        const { user } = req;
        if (roles.includes(user.role)) {
            next();
        } else {
            res.status(401).send('ROL_NO_VALID');
            return;
        }
    } catch (err) {
        res.status(400).send('Error ROL_NO_VALID');
    }
};

export { checkRole }