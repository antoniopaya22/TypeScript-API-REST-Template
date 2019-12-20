import { TaskController } from "../controllers/task-controller";

export class Routes {       
        
    public taskController: TaskController = new TaskController();

    public routes(app): void {          
        app.route('/')
        .get(this.taskController.saludarTask)
        //.post(this.taskController.addNewTask)
        //.put(this.taskController.updateTask)

        //app.route('/task/:taskId')
        //.delete(this.taskController.deleteTask)
    }
}
