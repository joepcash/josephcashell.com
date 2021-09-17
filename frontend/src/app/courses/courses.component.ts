import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses!: Course[];

  constructor(private courseService: CoursesService) {
   }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      (courses: Course[]) => {
        this.courses = courses;
      }
    )
  }

}
