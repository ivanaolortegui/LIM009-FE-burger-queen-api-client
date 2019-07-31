import { Component, OnInit, ReflectiveInjector } from "@angular/core";
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
  min: number = 0;
  seg: number = 0;
  chronometer: any;
  ngOnInit() {
    this.orderService.getOrders().subscribe((respon: orderResponse[]) => {
      this.orders = respon; // Obtener todos las ordenes
      console.log(respon);
    });

    this.chronometer = setInterval(() => {
      this.seg++;
      if (this.seg === 60) {
        this.seg = 0;
        this.min++;
        if (this.min === 0) {
          this.min = 0;
        }
      }
    }, 1000);
  }
  captureData(item: any) {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionada;
    item.status = this.verSeleccion;

    console.log(this.opcionSeleccionada);
    console.log(item.id);
    if (this.verSeleccion === "delivered" || "canceled") {
      clearInterval(this.chronometer);
    }

    this.orderService.putStatus(item, item.id).subscribe(resp => {
      //Envio objeto y id
      console.log(resp);
    });
  }
}
