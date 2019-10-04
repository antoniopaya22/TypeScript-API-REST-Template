import { Task } from '../models/task';
import { Request, Response } from 'express';


export class TaskController{

    public saludarTask (req: Request, res: Response) {           
        const t = new Task();
        res.status(200).json({
            message: t.saludar("Antonio")
        });
    }

}
