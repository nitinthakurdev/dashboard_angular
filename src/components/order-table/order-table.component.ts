import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-table.component.html',
  styles: ``
})
export class OrderTableComponent implements OnInit {
  @Input() data:any
  ngOnInit(): void {
    // console.log(this.data)
  }
}
