import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../../components/modal/modal.component';
import { User } from '../../constants/schemas';
import { TodoService } from '../../services/todo/todo.service';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatIconModule, CommonModule, ModalComponent],
  templateUrl: './todo.component.html',
  styles: ``
})
export class TodoComponent implements OnInit {

  showModal:boolean = false
  showOption:boolean = false;
  indexValue:number|null  = null;

  constructor(private todoService: TodoService){}


  handleShow(val:boolean){
    this.showOption = val
    
  }

  handleIndex(x:number){
    this.indexValue = x
  }

  handleModel (x:boolean):void {
    this.showModal = x
    this.updateData = null
  }

  data:any = []

  updateData:User | null = null

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.todoService?.getTodo().subscribe({
      next: (da) => {
        this.data = da
        this.showOption = false
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  DeleteTodo(id:string){
    this.todoService.DeleteTodo(id).subscribe({
      next:(da)=>{
        this.getData()
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  submitData(val: User) {
    this.todoService.addTodo(val).subscribe({
      next: (da) => {
        this.showModal = false
        this.getData()
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

  UpdateData(id:string,status:string){
    this.todoService.updateTodo(id,{status}).subscribe({
      next: (da) => {
        this.getData()
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  Updatetodo(e :{id:string,data:User}){
    this.todoService.updateTodoData(e.id,e.data).subscribe({
      next: (da) => {
        this.showModal = false;
        this.getData()
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  formatDate(tar: string): string {
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

  EditTask(data:User){
    this.updateData = data
    this.showModal = true
    this.showOption = false
  }

  

}
