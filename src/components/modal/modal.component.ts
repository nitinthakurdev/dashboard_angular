import { CommonModule } from '@angular/common';
import { Component ,EventEmitter ,Input,OnInit,Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../constants/schemas';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styles: ``
})


export class ModalComponent implements OnInit {
  @Output() toggle = new EventEmitter<boolean>() ;
  @Output() CreateTodo = new EventEmitter<User>();
  @Output() Updatetodo = new EventEmitter<{id:string,data:User}>();
  @Input() updateData?:any | null ;

  Todo : FormGroup  = new FormGroup({
    title: new FormControl("",[Validators.required]),
    Description: new FormControl("", [Validators.required,Validators.minLength(20)]), 
    date: new FormControl("", [Validators.required]), 
  })

  changeToggle () {
    this.toggle.emit(false)
  }

  submitData(){
    if(this.updateData){
      const data = this.Todo.value
      this.Updatetodo.emit({id:this.updateData?.id,data:{...data,status:this.updateData.status}})
    }else{
      const data = this.Todo.value
      console.log(data)
      this.CreateTodo.emit({ ...data, status: "pending" })
    }
  }

  ngOnInit(): void {
    if(this.updateData){
      this.Todo.setValue({ title: this.updateData.title, Description: this.updateData.Description, date: this.updateData.date })
    }
  }

  

}
