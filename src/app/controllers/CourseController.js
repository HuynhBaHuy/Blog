/** @format */

const Course = require('../models/Course');
// xu ly van de bao mat cua Handlebar
const {mongooseToObject} = require('../../util/mongoose');
class CourseController {
    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then((course) =>
                res.render('courses/show', {course: mongooseToObject(course)}),
            )
            .catch(next);
    }

    //[GET] /course/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /course/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const newCourse = new Course(formData);
        newCourse
            .save()
            .then(() => res.redirect('/')) // redirect to detail screen
            .catch((error) => {});
    }
}

module.exports = new CourseController();
