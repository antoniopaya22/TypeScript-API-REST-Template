
import * as crypto from 'crypto';
import { Request, Response } from 'express';
import { UserRepository } from '../repository/user-repository';
import { User } from '../models/user';
import { DeleteResult } from 'typeorm';


export class UserController {

    public async getUsers(req: Request, res: Response) {
        const users = await UserRepository.getUsers();
        if(users != undefined){
            res.status(200).json(users);
        } else {
            res.status(500).json({error: "Error al obtener los usuarios"})
        }
    }

    public async getUserById(req: Request, res: Response) {
        const user = await UserRepository.getUserById(Number.parseInt(req.params.id));
        if(user != undefined){
            res.status(200).json(user);
        } else {
            res.status(500).json({error: "Error al obtener al usuario"})
        }
    }

    public async updateUser(req: Request, res: Response) {
        let salt = crypto.randomBytes(16).toString("hex");
        let hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, `sha512`).toString(`hex`);
        let userBody = new User(req.body.username,req.body.lastname, hash, salt);
        const user = await UserRepository.updateUser(Number.parseInt(req.params.id), userBody);
        if(user != undefined){
            res.status(200).json(user);
        } else {
            res.status(500).json({error: "Error al actualizar al usuario"})
        }
    }

    public async deleteUser(req: Request, res: Response) {
        const user:DeleteResult = await UserRepository.deleteUser(Number.parseInt(req.params.id));
        if(user.raw != undefined){
            res.status(200).json({delete: true});
        } else {
            res.status(500).json({delete: false, error: "Error al eliminar el usuario"})
        }
    }

    public async addUser(req: Request, res: Response) {
        let salt = crypto.randomBytes(16).toString("hex");
        let hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, `sha512`).toString(`hex`);
        let userBody = new User(req.body.username,req.body.lastname, hash, salt);
        const user = await UserRepository.addUser(userBody);
        if(user != undefined){
            res.status(200).json(user);
        } else {
            res.status(500).json({error: "Error al crear al usuario"})
        }
    }

}
