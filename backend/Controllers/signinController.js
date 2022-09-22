require('dotenv').config()
const Joi = require("joi");
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const  Jwt  = require("jsonwebtoken");
const customErrorHandler = require('../services/customErrorHandler');

const signinController = {

    async signin(req, res, next){

        // data validation

        const signinSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
        })

        const {error} = signinSchema.validate(req.body)

        if(error){
            return next(error)
        }

        // let access_token;

        try {
            const user = await Admin.findOne({email : req.body.email})
            
            if(!user){
                return next(customErrorHandler.unavailable("User unavailable"))
            }

            // password matching 

            const passwordMatch = await bcrypt.compare(req.body.password, user.password);

            if(!passwordMatch){
                return next(customErrorHandler.wrongCredentials("Wrong Credentials"))
            }

            const access_token = await Jwt.sign({id : user._id}, process.env.JWT_SECRET)

            return res.json({success : true ,access_token, message: 'You are logged in successfully!'});

        } catch (error) {
            
            return next(error);
        }

        
    }
}


module.exports = signinController;