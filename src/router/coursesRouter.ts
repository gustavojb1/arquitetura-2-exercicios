import express from 'express';
import {CoursesController} from '../controller/CoursesController'

 const coursesRouter = express.Router()

    const coursesController = new CoursesController()

    coursesRouter.get("/", coursesController.getCourses)
    coursesRouter.post("/", coursesController.createCourse)

    export default coursesRouter;