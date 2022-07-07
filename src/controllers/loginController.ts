import { Request, Response } from 'express';
import IHttpResponseModel from '../models/HttpResponseModel';
import databaseService from '../services/dabataseService';
import { mapHttpRespose } from '../utils/mapperUtil';

class LoginController {

    public async startSession(rq: Request, rs: Response) {
        try {
            const { body } = rq;
            const conn = databaseService.connection();
            const result = await databaseService.runQuery(conn,
                `SELECT 
                u.id as userId,
                u.person_id as personId,
                u.profile_id as profileId,
                u.username,
                u.image,
                u.branch_office_id as branchOfficeId,
                u.register_status as registerStatus,
                p.document,
                p.first_name as firstName,
                p.second_name as secondName,
                p.first_surname as firstSurname,
                p.second_surname as secondSurname,
                p.phone,
                p.email
                FROM user u
                INNER JOIN person p ON p.id = u.person_id
                WHERE u.username = ? AND u.password = ?`, [body.username, body.password]);

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