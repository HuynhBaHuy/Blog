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

    //[GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {course: mongooseToObject(course)});
            })
            .catch(next);
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

    //[PUT] /course/:id/update
    update(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        Course.updateOne({_id: req.params.id}, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
