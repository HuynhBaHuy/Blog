/** @format */

const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:id/edit', courseController.edit);
router.delete('/:id', courseController.destroy);
router.put('/:id/update', courseController.update);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;
