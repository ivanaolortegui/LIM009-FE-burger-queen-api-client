import {
  Component,
  OnInit,
} from "@angular/core";
import { OrdersService } from "../../../services/orders.service";
import { orderResponse } from "../../../interface/orderResponse";

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.css"]
})
export class ViewOrdersComponent implements OnInit {
  orders: orderResponse[];
  timers = {};

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((respon: orderResponse[]) => {
      this.orders = respon; // Obtener todos las ordenes
      this.orders.forEach(order => {
        this.timeForOrders(order);
      });
    });
  }

  timeForOrders(item: any) {
    const obj: object = {
      ...item
    };
    let realTimeOfOrders;
    let interval;
    if (obj["status"] === "delivered" || obj["status"] === "canceled") {
      realTimeOfOrders = (obj["dateProcessed"] - item.dateEntry) / 1000;
    } else {
      const newDate = Date.now();
      realTimeOfOrders = (newDate - item.dateEntry) / 1000;
    } // esta en segundos
    let segundosTotales = Math.trunc(realTimeOfOrders % 60);
    let totalMinutes = Math.trunc(realTimeOfOrders / 60);
    let hours = Math.trunc(totalMinutes / 60);
    let min = Math.trunc(totalMinutes % 60);
    if (obj["status"] === "delivering") {
      interval = setInterval(() => {
        segundosTotales++;
        if (segundosTotales > 59) {
          segundosTotales = 0;
        }
        if (min > 59) {
          min = 0;
        }

        this.timers[item.id] = {
          hours,
          min,
          sec: segundosTotales,
          interval //he ingresado el setInterval en una propiedad del obj timers para detenerlo
        };
      }, 1000);
    } else {
      this.timers[item.id] = {
        hours,
        min,
        sec: segundosTotales
      };
    }
  }

  captureData(item: any, state) {
    // debugger
    // declaramos una variable para que reciba el estado
    const obj: object = {
      ...item,
      status: state
    };
    /*  console.log(state);
    console.log(item.id); */
    if (state === "delivered" || state === "canceled") {
      obj["dateProcessed"] = Date.now();
      clearInterval(this.timers[item.id].interval);
    }

    this.orderService.putStatus(obj, item.id).subscribe(resp => {
      //Envio objeto y id
      // console.log(resp);
    });
  }
}
