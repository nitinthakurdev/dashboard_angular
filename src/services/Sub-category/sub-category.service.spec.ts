import { TestBed } from '@angular/core/testing';

import { SubCategoryService } from './sub-category.service';

describe('SubCategoryService', () => {
  let service: SubCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
