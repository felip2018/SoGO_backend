import databaseService from "./dabataseService";

class SessionService {
    
    public async login(username: string, password: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
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
                    WHERE u.username = ? AND u.password = ?`, [username, password]);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    } 
}

const sessionService = new SessionService();
export default sessionService;