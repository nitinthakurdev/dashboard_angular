import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './inbox.component.html',
  styles: ``
})
export class InboxComponent {
  val:number|undefined|null  = 1

  changeval(x:number){
    this.val = x
  }

  data = [1]  
  
  constructor(){
    this.data[50] = 50
  }

}
