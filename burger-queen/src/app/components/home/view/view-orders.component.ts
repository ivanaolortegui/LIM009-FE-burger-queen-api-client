import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
import { orderResponse } from '../../../interface/orderResponse';



@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
 orders : orderResponse[];
  constructor(private orderService: OrdersService) { }
  opcionSeleccionada: string  = 'pending';
  verSeleccion: string        = '';

  ngOnInit() {
    this.orderService.getOrders().subscribe((respon:orderResponse[]) => {
      this.orders = respon// Obtener todos las ordenes
      console.log(respon);
    })
 }
 captureData(){
  this.verSeleccion = this.opcionSeleccionada;
  console.log(this.verSeleccion)

  }

}
