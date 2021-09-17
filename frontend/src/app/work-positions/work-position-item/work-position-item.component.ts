import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/shared/experience.model';
import { WorkPosition } from 'src/app/shared/work-position.model';

@Component({
  selector: 'app-work-position-item',
  templateUrl: './work-position-item.component.html',
  styleUrls: ['./work-position-item.component.css']
})
export class WorkPositionItemComponent implements OnInit {
  @Input() work_position!: WorkPosition;

  constructor() {
   }

  ngOnInit(): void {
    console.log("Making item");
  }

}
