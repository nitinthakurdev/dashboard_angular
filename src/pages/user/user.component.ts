import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './user.component.html',
  styles: ``
})
export class UserComponent implements OnInit {
  data:any=[]

  newData: any = [{
    name: "Gyan",
    email: "gyan@gmail.com",
    status: true,
    sellerBlock: true
  },
    {
      name: "Aman",
      email: "aman@gmail.com",
      status: false,
      sellerBlock: false
    },
    {
      name: "Rahul",
      email: "rahul@gmail.com",
      status: false,
      sellerBlock: true
    },
    {
      name: "Yogesh",
      email: "yogesh@gmail.com",
      status: true,
      sellerBlock: false
    },]

  ngOnInit(): void {
    this.data = this.newData
  }

  searchSeller(e:Event){
    const {value} = e.target as HTMLInputElement
    if(this.data.length > 0){
      this.data = this.data.filter((item: any) => item.name.toLowerCase().includes(value.toLocaleLowerCase()))
    }else{
      this.data = this.newData.filter((item:any)=> item.name.toLowerCase().includes(value.toLocaleLowerCase()))
    }

  }

  filterByStatus(e: Event) {
    const { value } = e.target as HTMLSelectElement;
    const status = value === 'true' ? true : value === 'false' ? false : "" ;
    if(this.data.length > 0 ){
      this.data = status !== ""
        ? this.data.filter((item: any) => item.status === status)
        : this.newData;
    }else{
      
      this.data = status !== ""
        ? this.newData.filter((item: any) => item.status === status)
        : this.newData;
    }
  }

  filterByAction(e: Event) {
    const { value } = e.target as HTMLSelectElement;
    const status = value === 'true' ? true : value === 'false' ? false : "";

    this.data = status !== ""
      ? this.newData.filter((item: any) => item.sellerBlock === status)
      : this.newData;
  }



  
}
