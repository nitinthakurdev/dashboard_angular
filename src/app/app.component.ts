import { Component } from '@angular/core';
import {  RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatIconModule,RouterLink,CommonModule,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dashboard';

  isVisible:boolean = false
  toggleVisible(){
    this.isVisible = !this.isVisible
  }
  
}
