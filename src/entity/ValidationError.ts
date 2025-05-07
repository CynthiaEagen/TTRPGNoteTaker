export class ValidationError extends Error {
    constructor(args) {
        super(args)
        this.name = "ValidationError"
    }
}