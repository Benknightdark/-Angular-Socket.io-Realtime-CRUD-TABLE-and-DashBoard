import { TestBed, inject } from '@angular/core/testing';

import { BooksioService } from './booksio.service';

describe('BooksioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksioService]
    });
  });

  it('should be created', inject([BooksioService], (service: BooksioService) => {
    expect(service).toBeTruthy();
  }));
});
