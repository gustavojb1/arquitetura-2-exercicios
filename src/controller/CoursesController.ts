import { Request, Response } from "express";
import { CoursesBusiness } from "../business/CoursesBusiness";

export class CoursesController{
    public getCourses = async (req:Request, res:Response)=>{
        try{
            const q = req.query.q as string | undefined;

            const  coursesBusiness = new CoursesBusiness();
            const output = await coursesBusiness.getCourses(q);

            res.status(200).send(output)

        }catch (error) {
            console.log(error);
      
            if (req.statusCode === 200) {
              res.status(500);
            }
      
            if (error instanceof Error) {
              res.send(error.message);
            } else {
              res.send("Erro inesperado");
            }
          }

    }

    public createCourse = async (req: Request, res: Response) => {
      try {
        const input = {
          id: req.body.id,
          name: req.body.name,
          lessons: req.body.lessons,
        };
  
        const coursesBusiness = new CoursesBusiness();
        const output = await coursesBusiness.createCourse(input);
  
        res.status(201).send(output);
      } catch (error) {
        console.log(error);
  
        if (req.statusCode === 200) {
          res.status(500);
        }
  
        if (error instanceof Error) {
          res.send(error.message);
        } else {
          res.send("Erro inesperado");
        }
      }
    };


}