import mysql from 'mysql2';
import * as dotenv from 'dotenv';
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

    public async runQuery(conn: mysql.Connection, sql: string, values: any[]): Promise<any> {
        return new Promise((resolve, reject)=>{
            conn.query(sql, values, function(err, results,  fields){
                try {
                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            })
        });
    }
}

const databaseService = new DatabaseService();
export default databaseService;