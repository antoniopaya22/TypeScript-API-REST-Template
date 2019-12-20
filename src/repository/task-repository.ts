import { Task } from '../models/task';

export class TaskRepository{
    public static saludar(): string {
        const t = new Task();
        return t.saludar("Antonio");
    }
}