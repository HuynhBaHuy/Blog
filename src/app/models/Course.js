/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// add slug generator plugin to mongoose
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
// create schema
const Course = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String},
        image: {type: String},
        slug: {type: String},
        videoId: {type: String, required: true},
        level: {type: String},
        slug: {type: String, slug: 'name', unique: true},
    },
    {
        timestamps: true,
    },
);

// add soft delete framework to Schema
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
// add plugin
mongoose.plugin(slug);

// create models and export it
module.exports = mongoose.model('Course', Course);
