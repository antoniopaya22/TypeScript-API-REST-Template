import { UserController } from "../controllers/user-controller";
import { Auth } from '../middlewares/auth';

export class Routes {       
        
    public userController: UserController = new UserController();
    public auth: Auth = new Auth();

    public routes(app): void {   

        // ========= USERS =========       
        app.route('/api/users')
        .get(this.userController.getUsers)
        .post(this.userController.addUser)

        app.route('/api/users/:id')
        .get(this.auth.isAuth,this.userController.getUserById)
        .delete(this.auth.isAuth, this.userController.deleteUser)
        .put(this.auth.isAuth, this.userController.updateUser)

        // ======== LOGIN ============
        app.route('/api/login')
        .post(this.auth.login)
    }
}
