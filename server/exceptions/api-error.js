export class ApiError extends Error {
    status;
    errors;

    constructor(status, messages, errors = []){
        super(messages);
        this.status = status;
        this.errors = errors;
    }

    static UserNotFound() {
        return new ApiError(401, 'Пользователь не найден');
    }

    static BadRequest(messages, errors = []) {
        return new ApiError(400, messages, errors);
    }

    static ServerError(messages, errors = []) {
        return new ApiError(500, messages, errors);
    }


}