import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkPositionsComponent } from './work-positions/work-positions.component';

const routes: Routes = [
  {path: 'experience', component: WorkPositionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
