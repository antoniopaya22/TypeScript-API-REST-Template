
import { Request, Response } from 'express';
import { TaskRepository } from '../repository/task-repository';


export class TaskController{

    public saludarTask (req: Request, res: Response) {     
        res.status(200).json({
            message: TaskRepository.saludar()
        });
    }

}
