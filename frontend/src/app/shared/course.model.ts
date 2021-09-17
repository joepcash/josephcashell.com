import { Education } from "./education.model";

export class Course {
    constructor(public id: number,
        public title: string,
        public institute: string,
        public location: string, 
        public start_date: Date,
        public end_date: Date,
        public education: Education[]
        ) {}
}