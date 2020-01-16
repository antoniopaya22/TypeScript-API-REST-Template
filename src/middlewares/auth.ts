import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { UserRepository } from '../repository/user-repository';

const secret: string = "secretAPI-RESTnodejs1234$";
const signOpts = {
    expiresIn: "24h"
};

export class Auth {

    public async login(req: Request, res: Response) {
        const user = await UserRepository.getUserByFirstName(req.body.firstName);
        if(user == undefined){
            res.status(403).json({error: "El usuario no existe"});
        }else {
            const hash = crypto.pbkdf2Sync(req.body.password, user.salt, 1000, 64, `sha512`).toString(`hex`);
            if(hash == user.hash){
                res.status(200).send(Auth.createToken(user.firstName));
            }else {
                res.status(500).json({error: "Error, la contraseña no coincide"});
            }
        }
    }

    public isAuth(req: Request, res: Response, next) {
        try {
            jwt.verify(req.headers.authorization, secret, function(err, decoded) {
                if(err){
                    res.status(403).send("Invalid authorization: "+err);
                }else{
                    next();
                }
            });
        } catch (err) {
            res.status(403).send("Invalid authorization: "+err);
        }
    }

    public static createToken(firstName: string): string{
        const payload = {
            name: firstName
        }
        return jwt.sign(payload, secret, signOpts);
    }

}