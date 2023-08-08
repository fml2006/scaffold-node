import { NextFunction, Response } from 'express'
import { RequestExt } from '../interfaces/requestExt.interface';
import { verifyToken } from '../utils/jwt.handle';

const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        if (!isUser) {
            res.status(401)
            res.send('SESSION_NO_VALID');
            return;
        }else{
            req.user = isUser;
            next();
        }
    } catch (err) {
        res.status(400)
        res.send('Error SESSION_NO_VALID');
    }
}

export { checkSession }