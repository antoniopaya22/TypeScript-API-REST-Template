import { UserController } from "../controllers/user-controller";
import { Auth } from '../middlewares/auth';

export class Routes {       
        
    public userController: UserController = new UserController();
    public auth: Auth = new Auth();

    public routes(app): void {   

        // ========= USERS =========       
        app.route('/api/users')
        .get(this.userController.getUsers)

        app.route('/api/user')
        .post(this.userController.addUserWithCrypto)

        app.route('/api/user/:id')
        .get(this.userController.getUserById)
        .delete(this.auth.isAuth, this.userController.deleteUser)

        // ======== LOGIN ============
        app.route('/api/login')
        .post(this.auth.login)
    }
}
