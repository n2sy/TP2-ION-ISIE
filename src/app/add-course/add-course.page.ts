import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCourseService } from '../Services/list-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  constructor(private courseServ: ListCourseService, private router: Router) {}

  ngOnInit() {}

  onSubmit(f) {
    console.log(f);
    this.courseServ.addCourse(f);
    this.router.navigateByUrl('/home');
  }
}
