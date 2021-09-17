import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { WorkPosition } from '../shared/work-position.model';
import { WorkPositionResponse } from '../shared/work-position-response.model';

@Injectable()
export class WorkPositionsService {
  constructor(private http: HttpClient) { }

workPositionsUrl = 'https://josephcashell.com/api/work_positions';

getWorkPositions() {
  return this.http.get<WorkPositionResponse>(this.workPositionsUrl).pipe(
    map(response => response.courses));
}
}