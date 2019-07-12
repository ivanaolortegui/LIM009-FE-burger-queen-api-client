import { Component, OnInit } from '@angular/core';
import {OrdersService} from 'src/app/services/orders.service';
import { product } from 'src/app/services/products';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderProduct : product[]=[];
    constructor( private orderservice :OrdersService) {
      this.orderservice.productData.subscribe(resp =>{
        this.orderProduct=resp;
        console.log(this.orderProduct)
      })
     }

  ngOnInit() {

  }

}
