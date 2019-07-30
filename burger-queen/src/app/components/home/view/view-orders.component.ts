import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../../../services/orders.service";
import { orderResponse } from "../../../interface/orderResponse";

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.css"]
})
export class ViewOrdersComponent implements OnInit {
  orders: orderResponse[];
  constructor(private orderService: OrdersService) {}
  opcionSeleccionada: string = "pending";
  verSeleccion: string = "";

   options = ["pending", "canceled", "delivering", "delivered"];

  ngOnInit() {
   
    this.orderService.getOrders().subscribe((respon: orderResponse[]) => {
      this.orders = respon; // Obtener todos las ordenes
      console.log(respon);
    });

 
  }
  captureData(item: any) {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionada;
   item.status = this.verSeleccion

    console.log(this.verSeleccion);
    console.log(item.id);
    

    this.orderService.putStatus(item, item.id).subscribe(resp => { //Envio objeto y id 
      console.log(resp);
    });
  }
  
}
