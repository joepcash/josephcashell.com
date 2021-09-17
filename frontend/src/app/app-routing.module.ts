import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { WorkPositionsComponent } from './work-positions/work-positions.component';

const routes: Routes = [
  {path: 'experience', component: WorkPositionsComponent}, 
  {path: 'education', component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
