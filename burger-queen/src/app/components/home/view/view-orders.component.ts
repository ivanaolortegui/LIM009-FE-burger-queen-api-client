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
  this.orderService.putStatus({
    "id": "order2",
    "userId": "1",
    "client": "jesica",
    "products": [
        { "qty": 2,
            "product": { "_id": "2",
            "name": "Hamburguesa Simple",
            "price": "10",
            "image": "https://image.flaticon.com/icons/svg/135/135592.svg",
            "type": "Almuerzo y cena",
            "dateEntry": ""
                
            }
        },
         { "qty": 4,
            "product": {  "_id": "3",
            "name": "Jugo de frutas natural",
            "price": "7",
            "image": "https://image.flaticon.com/icons/svg/1902/1902947.svg",
            "type": "Desayuno",
            "dateEntry": ""
                
            }
        }
        
        
    ],
    "status": "cancelado",
    "dateEntry": "",
    "dateProcessed":""
}).subscribe((resp)=>{
    console.log(resp)
  })
   
  }
  
}
