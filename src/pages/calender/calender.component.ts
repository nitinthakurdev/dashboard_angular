import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../constants/schemas';
import { TodoService } from '../../services/todo/todo.service';



@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [CommonModule, MatCalendar, MatNativeDateModule],
  templateUrl: './calender.component.html',
  styles: [`
  
  `]
})
export class CalenderComponent implements OnInit {



  constructor(private todoService:TodoService){}
  allData : User[] | [] = []

  data : User[] | [] = []
  
 selectDate:Date = new Date() 

  handleChange(event: any) {
    let newDate = this.formatDate(event).split(" ")
    this.data = this.allData.filter((item:User):any => {
      let temp = this.formatDate(item.date).split(' ')
      if (temp[0] === newDate[0] && temp[1] === newDate[1] && temp[2] === newDate[2] && temp[3] === newDate[3]) return item
    });
  
 
  }

  ngOnInit(): void {
    this.getTodoData()
  }

  getTodoData(){
   
    this.todoService.getTodo().subscribe({
      next:(data)=>{
        this.allData = data
        let CurrentDate = new Date()
        let newDate = this.formatDate(CurrentDate).split(" ")
        this.data = this.allData.filter((item: User): any => {
          let temp = this.formatDate(item.date).split(' ')
          if (temp[0] === newDate[0] && temp[1] === newDate[1] && temp[2] === newDate[2] && temp[3] === newDate[3]) return item
        });
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


  formatDate(tar: string | Date): string {
    const date = new Date(tar);

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };

    return new Intl.DateTimeFormat('en-IN', options).format(date);
  }
  
}
