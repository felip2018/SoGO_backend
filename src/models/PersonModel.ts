export default interface IPerson {
    documentTypeId: number;
    document: number;
    firstName: string;
    secondName?: string;
    firstSurname: string;
    secondSurname?: string;
    phone?: string;
    email: string;
    cityId: number;
    verificationCode: string;
    isVerified: number;
}