export declare class CommonResponse<T> {
    statusCode: number;
    status: string;
    message: string;
    data: T;
    error?: string;
    constructor(statusCode: number, status: string, message: string, data: T, error?: string);
}
