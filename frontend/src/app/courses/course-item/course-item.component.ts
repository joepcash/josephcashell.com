import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course!: Course;
  datepipe: DatePipe = new DatePipe('en-US');

  constructor() { }

  ngOnInit(): void {
  }

  cleanDate(date: Date) {
    if (date) {
      return this.datepipe.transform(date, 'MMM y');
    } else {
      return 'present';
    }
  }

}
