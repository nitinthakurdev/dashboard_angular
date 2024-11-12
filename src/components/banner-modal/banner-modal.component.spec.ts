import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerModalComponent } from './banner-modal.component';

describe('BannerModalComponent', () => {
  let component: BannerModalComponent;
  let fixture: ComponentFixture<BannerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
