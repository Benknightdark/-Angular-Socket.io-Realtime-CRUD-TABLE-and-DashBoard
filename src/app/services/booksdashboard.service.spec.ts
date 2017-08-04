import { TestBed, inject } from '@angular/core/testing';

import { BooksdashboardService } from './booksdashboard.service';

describe('BooksdashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksdashboardService]
    });
  });

  it('should be created', inject([BooksdashboardService], (service: BooksdashboardService) => {
    expect(service).toBeTruthy();
  }));
});
