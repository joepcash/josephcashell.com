import { Component, Input, OnInit } from '@angular/core';
import { WorkPosition } from 'src/app/shared/work-position.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-work-position-item',
  templateUrl: './work-position-item.component.html',
  styleUrls: ['./work-position-item.component.css']
})
export class WorkPositionItemComponent implements OnInit {
  @Input() work_position!: WorkPosition;
  datepipe: DatePipe = new DatePipe('en-US');

  constructor() {}

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
