import IHttpResponseModel from "../models/HttpResponseModel";
import ISqlCondition from "../models/SqlConditionModel";
import { databaseErrors } from "./objectsToMap/databaseErrors";
import { tablesFields } from "./objectsToMap/tableFiels";

export const mapInsertSql = (table:  any | string, fields: any[], body: any) => {
    let sql = `INSERT INTO ${table} (`;
    let values = '';
    fields.forEach((field, index) => {
        sql += (index != fields.length - 1) ? `${field},` : `${field}) VALUES (`
        values += (index != fields.length - 1) ? `'${body[field]}',` : `'${body[field]}')`
    });
    sql += values;
    return sql;
}

export const mapSelectSql = (table: any | string, fields: string[], conditions: ISqlCondition[]) => {
    let sql = `SELECT `;
    fields.forEach((field, index) => {
        sql += (index != fields.length - 1) ? `${field}, ` : `${field} FROM ${table} WHERE `
    });
    conditions.forEach((condition, index) => {
        sql += (index != conditions.length - 1) ? `${condition.field} = '${condition.value}' AND ` : `${condition.field} = '${condition.value}'`
    });
    return sql;
}

export const mapUpdateSql = (table: any | string, values: ISqlCondition[], conditions: ISqlCondition[]) => {
    let sql = `UPDATE ${table} SET `;
    values.forEach((item, index) => {
        sql += (index != values.length - 1) ? `${item.field} = '${item.value}', ` : `${item.field} = '${item.value}' WHERE `
    });
    conditions.forEach((condition, index) => {
        sql += (index != conditions.length - 1) ? `${condition.field} = '${condition.value}' AND ` : `${condition.field} = '${condition.value}'`
    });
    return sql;
}

export const getTableFields = (table: string) => {
    return tablesFields.filter(item => item.table === table)[0].fields;
}

export const getDatabaseError = (state: string) => {
    let error = databaseErrors.filter(item => item.state === state);
    if (!error.length) {
        error[0] = {
            state: '103',
            message: 'Se ha producido un error desconocido'
        }
    }
    return error[0];
}

export const mapHttpRespose = (data: any, code: number, message: string): IHttpResponseModel => {
    return {
        data,
        code,
        message
    }
}

