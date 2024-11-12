import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryModalComponent } from './category-modal.component';

describe('CategoryModalComponent', () => {
  let component: CategoryModalComponent;
  let fixture: ComponentFixture<CategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
