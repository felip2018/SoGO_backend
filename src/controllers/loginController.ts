import { Request, Response } from 'express';
import database from '../services/dabataseService';

class LoginController {

    public async startSession(rq: Request, rs: Response) {
        try {
            const conn = database.connection();
            const response = await database.runQuery(conn, 'SELECT * FROM tipo_documento', []);
            conn.end();
            return rs.status(200).json({
                message: 'starts session',
                response
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();    
        }
    }

}
const loginController = new LoginController();
export default loginController;