import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';

export interface RequestExt extends Request {
    user?: any | JwtPayload ; // Any no es lo mejor, pero por ahora sirve
}