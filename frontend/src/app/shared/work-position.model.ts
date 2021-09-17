import { Experience } from "./experience.model";

export class WorkPosition {
    constructor(public id: number,
        public title: string,
        public company: string,
        public location: string, 
        public start_date: Date,
        public end_date: Date,
        public experience: Experience
        ) {}
}