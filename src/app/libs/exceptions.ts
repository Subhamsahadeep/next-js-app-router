export class AuthExceptionError extends Error {
    constructor(message = 'Auth is Required to Access this Page') {
        super(message);
        this.name = 'AuthExceptionError';
    }
}