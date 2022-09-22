
const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    course : {type : String, required : true},
    fees : {type : String,  required : true},
    duration : {type : String, required : true},
    comment : {type : String, required : true},

},{ timestamps : true }) 


module.exports = mongoose.model('Course', courseSchema);