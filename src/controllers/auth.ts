import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.services';

const registerCtrl = async ({body}: Request, res: Response ) => {
    const responseUser = await registerUser(body);
    res.send(responseUser);
}

const loginCtrl = async ({body}: Request, res: Response) => {
    const {email, password} = body;
    const responseUser = await loginUser({email, password});
    res.send(responseUser);
}

export { registerCtrl, loginCtrl };
