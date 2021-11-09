import { TestBed } from '@angular/core/testing';

import { ListCourseService } from './list-course.service';

describe('ListCourseService', () => {
  let service: ListCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
