import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    constructor(firstName?: string, lastName?: string, hash?: string, salt?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hash = hash;
        this.salt = salt;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    hash: string;

    @Column()
    salt: string;

}