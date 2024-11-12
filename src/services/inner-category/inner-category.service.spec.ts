import { TestBed } from '@angular/core/testing';

import { InnerCategoryService } from './inner-category.service';

describe('InnerCategoryService', () => {
  let service: InnerCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnerCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
