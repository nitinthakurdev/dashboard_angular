import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  MatIconModule } from '@angular/material/icon';
import { OrderTableComponent } from '../../components/order-table/order-table.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MatIconModule, CommonModule, OrderTableComponent],
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent implements OnInit {
  val :number =1
  changeVal(x:number){
    this.val = x
    if (this.val === 1) {
      this.data = this.OrderData
    } else if (this.val === 2) {
      this.data = this.OrderData.filter((item) => item.status.toLocaleLowerCase() === 'in progress')
    } else if (this.val === 3){
      this.data = this.OrderData.filter((item) => item.status.toLocaleLowerCase() === 'delivered')
    }else{
      this.data = this.OrderData.filter((item) => item.status.toLocaleLowerCase() === 'cancel')
    }
  }
  data:any=[]
  OrderData=[
    {
      image:"https://srvonline.in/wp-content/uploads/2022/02/v23-2.png",
      title:"vivo v23 pro max",
      buyerName:"Gyan",
      address:"NSP bulding1",
      order_date:"10-08-2024",
      payement_type:"Online",
      status:"In Progress",
      deadline:"14-08-2024"
    },
    {
      image:"https://srvonline.in/wp-content/uploads/2022/02/v23-2.png",
      title:"vivo v23 pro max",
      buyerName:"Gyan",
      address:"NSP bulding1",
      order_date:"10-08-2024",
      payement_type:"Online",
      status:"Delivered",
      deadline:"14-08-2024"
    },
    {
      image:"https://srvonline.in/wp-content/uploads/2022/02/v23-2.png",
      title:"vivo v23 pro max",
      buyerName:"Gyan",
      address:"NSP bulding1",
      order_date:"10-08-2024",
      payement_type:"Online",
      status:"Cancel",
      deadline:"14-08-2024"
    },
    {
      image:"https://srvonline.in/wp-content/uploads/2022/02/v23-2.png",
      title:"vivo v23 pro max",
      buyerName:"Gyan",
      address:"NSP bulding1",
      order_date:"10-08-2024",
      payement_type:"Online",
      status:"In Progress",
      deadline:"14-08-2024"
    },
  ]

  ngOnInit(): void {
      this.data = this.OrderData
  }

}
