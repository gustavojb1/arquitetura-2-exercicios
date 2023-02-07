import { CoursesDatabase } from "../database/CoursesDatabase"
import { Courses } from "../models/Courses"
import { CoursesDB } from "../types"

export class CoursesBusiness{
    public getCourses = async (q:string|undefined)=>{

        const coursesDatabase = new CoursesDatabase()
        const coursesDB = await coursesDatabase.findCourses(q)

        const courses: Courses[] = coursesDB.map((coursesDB)=> new Courses(
            coursesDB.id,
            coursesDB.name,
            coursesDB.lessons,
        ))
        
        return courses

    }

    public createCourse = async (input: any) => {
        const { id, name, lessons } = input

        if (typeof id !== "string") {
            throw new Error("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new Error("'name' deve ser string")
        }

        if (typeof lessons !== "number") {
            throw new Error("'email' deve ser um número")
        }

        

        const coursesDatabase = new CoursesDatabase()
        const [courseDBExists] = await coursesDatabase.findCourses(id)

        if (courseDBExists) {
            throw new Error("'id' já existe")
        }

        const newCourse = new Courses(
            id,
            name,
            lessons
        ) 

        const newCourseDB: CoursesDB = {
            id: newCourse.getId() ,
            name: newCourse.getName() ,
            lessons: newCourse.getLessons() ,
        }

        await coursesDatabase.insertCourse(newCourseDB)

        const output = {
            message: "Cadastro realizado com sucesso",
            user: newCourseDB
        }

        return output
    }
}