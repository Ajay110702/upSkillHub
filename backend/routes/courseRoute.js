import express from 'express';
import { createCourse, updateCourse,deleteCourse,getAllCourses,courseDetails, buyCourses } from '../controllers/courseController.js';
import userMiddleware from '../middlewares/userMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';
const router=express.Router();

router.post('/create',adminMiddleware,createCourse);
router.put('/update/:courseId',adminMiddleware,updateCourse)
router.delete('/delete/:courseId',adminMiddleware,deleteCourse)
router.get('/courses',getAllCourses)
router.get('/:courseId',courseDetails)

router.post("/buy/:courseId",userMiddleware,buyCourses);

export default router;