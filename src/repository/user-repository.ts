import { User } from '../models/user';
import { getConnection, DeleteResult } from "typeorm";

export class UserRepository {

    public static getUsers(): Promise<User[]> {
        return getConnection().getRepository(User).find();
    }

    public static getUserById(id: number): Promise<User> {
        return getConnection().getRepository(User).findOne({
            where: {
                id: id
            }
        });
    }

    public static getUserByFirstName(firstName: number): Promise<User> {
        return getConnection().getRepository(User).findOne({
            where: {
                firstName: firstName
            }
        });
    }

    public static deleteUser(id: number): Promise<DeleteResult> {
        return getConnection().getRepository(User).delete({id: id});
    }

    public static addUser(user: User): Promise<User> {
        return getConnection().getRepository(User).save(user);
    }
}