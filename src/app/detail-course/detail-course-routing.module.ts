import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCoursePage } from './detail-course.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCoursePageRoutingModule {}
