import { WorkPosition } from "./work-position.model";

export class WorkPositionResponse {
    constructor(public courses: WorkPosition[]
        ) {}
}