
export default class CustomError extends Error {
    code: Number;
    constructor(message: string, code: number) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
