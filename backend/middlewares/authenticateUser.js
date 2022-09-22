require('dotenv').config()
const  Jwt  = require("jsonwebtoken");
const CustomErrorHandler = require('../services/customErrorHandler')


const authenticateUser = async(req, res, next) =>{


    const token = req.header('access_token');
    // console.log(token)

    if(!token){
        return next(CustomErrorHandler.unauthorized({success : false, message : "Please authenticate using a valid toke"}))
    }

    try {
        const data = Jwt.verify(token, process.env.JWT_SECRET)
        console.log(data);
        if(data){
            req.body.id = data.id;
            next() 
        }
        
    } catch (error) {
        return next(error)
    }

}




module.exports = authenticateUser;