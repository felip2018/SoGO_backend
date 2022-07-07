export default interface IUpdateResponse {
    fieldCount: number;
    affectedRows: number; // filas afectadas
    insertId: number;
    info: string;
    serverStatus: number;
    warningStatus: number;
    changedRows: number; // filas cambiadas
}