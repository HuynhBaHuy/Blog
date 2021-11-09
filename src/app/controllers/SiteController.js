/** @format */

const Course = require('../models/Course');
// xu ly van de bao mat cua Handlebar
const {multipleMongooseToObject} = require('../../util/mongoose');
class SiteController {
    //[GET]  /
    home(req, res, next) {
        // link to model Course
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            }) // same as courses:courses; this is Enhance object handler
            .catch(next); // same as .catch(error=>next(error));
        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
