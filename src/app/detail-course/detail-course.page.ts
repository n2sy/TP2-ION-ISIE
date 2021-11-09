import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListCourseService } from '../Services/list-course.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.page.html',
  styleUrls: ['./detail-course.page.scss'],
})
export class DetailCoursePage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseServ: ListCourseService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      this.selectedCourse = this.courseServ.getCourseById(p.get('id'));
    });
  }

  async deleteCourse() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Are you sure to delete this course ? ',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.courseServ.deleteCourseById(this.selectedCourse);
            this.router.navigateByUrl('/home');
          },
        },
      ],
    });

    await alert.present();
  }
}
