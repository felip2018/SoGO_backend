import { Router } from 'express';
import maintenanceController from '../controllers/maintenanceController';

class MaintenanceRouter {
    public router: Router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/insert', maintenanceController.insertData);
        this.router.post('/select', maintenanceController.selectData);
        this.router.post('/update', maintenanceController.updateData);
    }
}

const maintenanceRouter = new MaintenanceRouter();
export default maintenanceRouter.router; 