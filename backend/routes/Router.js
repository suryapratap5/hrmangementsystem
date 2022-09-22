const express = require('express');
const signinController = require('../Controllers/signinController');
const signupController = require('../Controllers/signupController');
const studentController = require('../Controllers/Student/studentController');
const CourseController = require('../Controllers/courses/CourseController')
const authenticateUser = require('../middlewares/authenticateUser');

const router = express.Router();


router.post('/signup', signupController.signup);

router.post('/signin', signinController.signin);

router.get('/fetchStudents', authenticateUser, studentController.fetchStudent);

router.post('/addStudent', authenticateUser, studentController.addStudent);

router.put('/updateStudent/:id', authenticateUser, studentController.updateStudent);

router.delete('/deleteStudent/:id', authenticateUser, studentController.deleteStudent);

// ************************Routes for courses***************************

router.post('/addCourse', authenticateUser, CourseController.addCourse);

router.get('/showCourses', authenticateUser, CourseController.showCourses);

router.put('/updateCourse/:id', authenticateUser, CourseController.updateCourse);

router.delete('/deleteCourse/:id', authenticateUser, CourseController.deleteCourse);



module.exports = router;