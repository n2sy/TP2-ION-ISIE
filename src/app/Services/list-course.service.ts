import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCourseService {
  private TabCourses = [
    {
      id: 1,
      title: 'Angular',
      author: 'Nidhal Jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
      keywords: ['SPA', 'Components', 'Binding'],
    },
    {
      id: 2,
      title: 'Android',
      author: 'Faouzia Gharbi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1745px-Android_robot.svg.png',
      keywords: ['Mobile', 'SDK', 'Activity'],
    },
    {
      id: 3,
      title: 'Ionic',
      author: 'Nawress Medouini',
      image: 'https://miro.medium.com/max/352/1*rZY47WiUohIbDS1W2bmVyA.png',
      keywords: ['Mobile', 'Hybrid', 'Pages'],
    },
  ];

  constructor() {}

  getTabCourses() {
    return this.TabCourses;
  }

  getCourseById(id) {
    return this.TabCourses.find((e) => e.id == id);
  }

  deleteCourseById(c) {
    let i = this.TabCourses.indexOf(c);
    this.TabCourses.splice(i, 1);
  }

  addCourse(newCourse) {
    newCourse.id = this.TabCourses[this.TabCourses.length - 1].id + 1;
    this.TabCourses.push(newCourse);
  }
}
