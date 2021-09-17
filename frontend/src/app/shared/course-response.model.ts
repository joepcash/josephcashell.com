import { Course } from "./course.model";

export class CourseResponse {
    constructor(public courses: Course[]
        ) {}
}