export default interface IInsertResponse {
    fieldCount: number;
    affectedRows: number; // filas afectadas
    insertId: number; // identificador generado
    info: string;
    serverStatus: number;
    warningStatus: number;
}