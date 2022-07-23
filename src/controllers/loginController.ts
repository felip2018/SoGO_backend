import { Request, Response } from 'express';
import IHttpResponseModel from '../models/HttpResponseModel';
import databaseService from '../services/dabataseService';
import sessionService from '../services/sessionService';
import { mapHttpRespose } from '../utils/mapperUtil';

class LoginController {

    public async startSession(rq: Request, rs: Response) {
        try {
            const { username, password } = rq.body;
            const result = await sessionService.login(username, password);
            if(result[0]) {
                return rs.status(200).json(mapHttpRespose(result[0], 200, 'ok')).end();
            } else {
                const error: IHttpResponseModel = {
                    data: '',
                    code: 409,
                    message: 'Usuario y/o clave incorrectos, por favor verifique'
                };
                throw error;
            }
        } catch (error: any) {
            return rs.status(error?.code || 500).json(error).end();    
        }
    }

}
const loginController = new LoginController();
export default loginController;