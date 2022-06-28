import { TestBed } from '@angular/core/testing';

import { BooksHelperService } from './books-helper.service';

describe('BooksHelperService', () => {
  let service: BooksHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
