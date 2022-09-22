

class customErrorHandler extends Error{
    
    constructor(status, msg){
        super();
        
        this.status = status;
        this.message = msg;
    }

    static alreadyExist(message){
        return new customErrorHandler(409, message)
    }

    static unavailable(message){
        return new customErrorHandler(409, message)
    }

    static wrongCredentials(message){
        return new customErrorHandler(404, message)
    }

    static unauthorized(message){
        return new customErrorHandler(420, message);
    }

}

module.exports = customErrorHandler;