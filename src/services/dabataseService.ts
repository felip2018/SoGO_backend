import mysql from 'mysql2';
import * as dotenv from 'dotenv';
dotenv.config();

class Database {

    public connection() {
        const conn = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME
        });
        return conn;
    }

    public async runQuery(conn: mysql.Connection, sql: string, values: any[]) {
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

const database = new Database();
export default database;