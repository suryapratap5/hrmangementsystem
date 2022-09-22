const Joi = require("joi");
const Course = require("../../models/Course");

const CourseController = {

   // Add couses 
   async addCourse(req, res, next) {
      //  console.log(req.body);

      const { course, fees, duration, comment } = req.body;
      const body = { course, fees, duration, comment };
      // data validation
      const courseValSchema = Joi.object({
         course: Joi.string().required(),
         fees: Joi.string().required(),
         duration: Joi.string().required(),
         comment: Joi.string().required()
      })

      const { error } = courseValSchema.validate(body);

      if (error) {
         return next(error);
      }


      try {

         const isCourse = await Course.exists({ course: course, fees: fees });

         if (isCourse) {
            return res.json({ success: false, message: "This course with this fees already exists" })
         }

         const addCourse = new Course({ course, fees, duration, comment });

         const result = await addCourse.save();

         return res.json({ success: true, message : 'Course added successfully', data: result })

      } catch (error) {
         return next(error)
      }


   },

   // show courses
   async showCourses(req, res, next) {

      try {
         const courses = await Course.find();

         return res.json({ success: true, courses });
      } catch (error) {

      }

   },

   // update course

   async updateCourse(req, res, next){

      const { course, fees, duration, comment } = req.body;
      const body = { course, fees, duration, comment };
      // data validation
      const courseValSchema = Joi.object({
         course: Joi.string().required(),
         fees: Joi.string().required(),
         duration: Joi.string().required(),
         comment: Joi.string().required()
      })

      const { error } = courseValSchema.validate(body);

      if (error) {
         return next(error);
      }

      try {
         
         const updatedCourse = await Course.findOneAndUpdate({_id: req.params.id}, {course, fees, duration, comment}, {new : true});

         return res.json({success : true, message : "Couse updated successfully"});

      } catch (error) {
         return next(error)
      }
   },

   // delete course
   async deleteCourse(req, res, next){
      try {
         
         const deletedCourse = await Course.findByIdAndDelete({_id : req.params.id})

         if(deletedCourse){
            return res.json({success : true, message : "Deleted Successfully"});
         }else{
            return res.json({success : false, message : "User doesn't exists"})
         }

      } catch (error) {
         return next(error)
      }
   }
}


module.exports = CourseController;