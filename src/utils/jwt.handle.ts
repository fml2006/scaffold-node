import { sign, verify } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'REDGOAT2';

const generateToken = (id:string, role:string) => {
    return sign({id, role}, JWT_SECRET, {expiresIn: '3h'});
}

const verifyToken = (jwt:string) => {
    const isValid = verify(jwt, JWT_SECRET);
    return isValid;
}

export { generateToken, verifyToken};
