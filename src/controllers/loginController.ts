import { Request, Response } from 'express';
import databaseService from '../services/dabataseService';

class LoginController {

    public async startSession(rq: Request, rs: Response) {
        try {
            const { body } = rq;
            const conn = databaseService.connection();
            const response = await databaseService.runQuery(conn,
                'SELECT * FROM user WHERE username = ? AND password = ?', [
                body.username,
                body.password
            ]);
            return rs.status(200).json(response).end();
        } catch (error) {
            return rs.status(409).json(error).end();    
        }
    }

}
const loginController = new LoginController();
export default loginController;