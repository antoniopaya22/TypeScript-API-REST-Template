import { UserController } from "../controllers/user-controller";
import { AuthController } from '../controllers/auth-controller';

export class Routes {       
        
    public userController: UserController = new UserController();
    public authController: AuthController = new AuthController();

    public routes(app): void {   

        // ========= USERS =========       
        app.route('/api/users')
        .get(this.userController.getUsers)

        app.route('/api/user')
        .post(this.userController.addUserWithCrypto)

        app.route('/api/user/:id')
        .get(this.userController.getUserById)
        .delete(this.authController.isAuth, this.userController.deleteUser)

        // ======== LOGIN ============
        app.route('/api/login')
        .post(this.authController.login)
    }
}
