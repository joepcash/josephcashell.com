import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { CourseResponse } from '../shared/course-response.model';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) { }

coursesUrl = 'https://josephcashell.com/api/courses';

getCourses() {
  return this.http.get<CourseResponse>(this.coursesUrl).pipe(
    map(response => response.courses));
}
}