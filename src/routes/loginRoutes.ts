import { Router } from 'express';
import loginController from '../controllers/loginController';

class LoginRouter {
    public router: Router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/start-session', loginController.startSession);
    }
}

const loginRouter = new LoginRouter();
export default loginRouter.router; 