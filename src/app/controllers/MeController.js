/** @format */

const Course = require('../models/Course');
// xu ly van de bao mat cua Handlebar
const {multipleMongooseToObject} = require('../../util/mongoose');
class CourseController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((deletedCourse) => {
                res.render('me/trash-courses', {
                    deletedCourse: multipleMongooseToObject(deletedCourse),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
