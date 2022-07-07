import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import loginRoute from './routes/loginRoutes';
import maintenanceRoutes from './routes/maintenanceRoutes';

const router: Express = express();

router.use(morgan('dev'));
router.use(cors());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());


/** Routes */
router.use('/login', loginRoute);
router.use('/maintenance-data', maintenanceRoutes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT || 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));