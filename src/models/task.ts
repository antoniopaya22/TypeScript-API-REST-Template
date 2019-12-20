
export class Task{

    saludar(s: string) {
        return `Hola ${s}`;
    }
    
}

/**
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
 */