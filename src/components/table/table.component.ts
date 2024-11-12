import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent {

  data = [
    {
      name:"Aman",
      email:"aman@gmail.com",
      phone:"1234567890",
      active:"active"
    },
    {
      name:"vishal",
      email:"vishal@gmail.com",
      phone:"1234567890",
      active:"active"
    },
    {
      name:"gyan",
      email:"gyan@gmail.com",
      phone:"1234567890",
      active:"active"
    },
    
  ]
}
