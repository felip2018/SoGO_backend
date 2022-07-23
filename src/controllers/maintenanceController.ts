import { Request, Response } from 'express';
import { getTableFields, mapHttpRespose, mapInsertSql, mapSelectSql, mapUpdateSql } from '../utils/mapperUtil';
import databaseService from '../services/dabataseService';
import IInsertResponse from '../models/InsertResponseModel';
import IUpdateResponse from '../models/UpdateResponseModel';

class MaintenanceController {

    public async insertData(rq: Request, rs: Response) {
        try {
            const { data, table } = rq.body;
            const conn = databaseService.connection();
            const index = (table) ? table.toString() : '';
            const sql = mapInsertSql(table, getTableFields(index), data);
            const result: IInsertResponse = await databaseService.runQuery(conn, sql, []);
            conn.commit();
            return rs.status(200).json(mapHttpRespose(result, 200, 'ok')).end();
        } catch (error) {
            console.log('se ha presentado un error: ', error);
            return rs.status(409).json(error).end();
        }
    }

    public async selectData(rq: Request, rs: Response) {
        try {
            const { table, fields, conditions = null, order = null } = rq.body;
            const conn = databaseService.connection();
            const sql = mapSelectSql(table, fields, conditions, order);
            const result: any[] = await databaseService.runQuery(conn, sql, []);
            return rs.status(200).json(mapHttpRespose(result, 200, 'ok')).end();
        } catch (error) {
            console.log('se ha presentado un error: ', error);
            return rs.status(409).json(error).end();
        }
    }

    public async updateData(rq: Request, rs: Response) {
        try {
            const { data, table, conditions } = rq.body;
            const conn = databaseService.connection();
            const sql = mapUpdateSql(table, data, conditions);
            const result: IUpdateResponse = await databaseService.runQuery(conn, sql, []);
            conn.commit();
            return rs.status(200).json(mapHttpRespose(result, 200, 'ok')).end();
        } catch (error) {
            console.log('se ha presentado un error: ', error);
            return rs.status(409).json(error).end();
        }
    }

}

const maintenanceController = new MaintenanceController();
export default maintenanceController;