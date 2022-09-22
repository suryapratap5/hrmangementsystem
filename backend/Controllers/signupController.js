const Joi = require("joi");
const bcrypt = require('bcrypt');
const Admin = require("../models/Admin");
const customErrorHandler = require("../services/customErrorHandler");


const signupController = {

    async signup(req, res, next) {

        const singupSchema = Joi.object({
            name: Joi.string().min(5).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
        })

        // data validation 

        const { error } = singupSchema.validate(req.body)


        if (error) {
            return next(error)
        }


        try {

            const exist = await Admin.exists({ email: req.body.email })

            if (exist) {
                return next(customErrorHandler.alreadyExist('User already exist'))
            }

            const hashPassword = await bcrypt.hash(req.body.password, 10);

            const { name, email, password } = req.body;

            const admin = new Admin({
                name, email, password: hashPassword
            })

            const result = await admin.save();
            
            return res.json({success : true, message : "You are registered now"})

        } catch (error) {
            return next(error);
        }


    }
}


module.exports = signupController;