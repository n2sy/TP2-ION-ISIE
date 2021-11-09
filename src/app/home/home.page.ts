import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCourseService } from '../Services/list-course.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tab;

  constructor(private CourseServ: ListCourseService, private router: Router) {}

  ngOnInit() {
    this.tab = this.CourseServ.getTabCourses();
  }

  goToAdd() {
    this.router.navigateByUrl('/home/add');
  }
}
