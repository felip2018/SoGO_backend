import mysql from 'mysql2';
import * as dotenv from 'dotenv';
import { getDatabaseError, mapHttpRespose } from '../utils/mapperUtil';
dotenv.config();

class DatabaseService {

    public connection() {
        const conn = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME
        });
        return conn;
    }

    public async runQuery(conn: mysql.Connection, sql: any, values: any[]): Promise<any> {
        return new Promise((resolve, reject)=>{
            conn.query(sql, values, function(err, results){
                if (err) {
                    console.log('runQuery[err]', err);
                    const error = mapHttpRespose('', 409, getDatabaseError(err.sqlState || '0').message)
                    reject(error);
                }
                resolve(results);
            })
        });
    }
}

const databaseService = new DatabaseService();
export default databaseService;