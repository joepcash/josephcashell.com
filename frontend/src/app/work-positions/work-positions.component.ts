import { Component, OnInit } from '@angular/core';
import { WorkPosition } from '../shared/work-position.model';
import { WorkPositionsService } from './work-positions.service';

@Component({
  selector: 'app-work-positions',
  templateUrl: './work-positions.component.html',
  styleUrls: ['./work-positions.component.css']
})
export class WorkPositionsComponent implements OnInit {
  work_positions!: WorkPosition[];

  constructor(private workPositionsService: WorkPositionsService) {
   }

  ngOnInit(): void {
    this.workPositionsService.getWorkPositions().subscribe(
      (work_positions: WorkPosition[]) => {
        this.work_positions = work_positions;
      }
    )
  }

}
