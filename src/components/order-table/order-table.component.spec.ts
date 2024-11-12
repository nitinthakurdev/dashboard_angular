import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTableComponent } from './order-table.component';

describe('OrderTableComponent', () => {
  let component: OrderTableComponent;
  let fixture: ComponentFixture<OrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
