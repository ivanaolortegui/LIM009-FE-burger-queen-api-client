import {
  Component,
  OnInit,
  ReflectiveInjector,
  OnDestroy
} from "@angular/core";
import { OrdersService } from "../../../services/orders.service";
import { orderResponse } from "../../../interface/orderResponse";

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.css"]
})
export class ViewOrdersComponent implements OnInit, OnDestroy {
  orders: orderResponse[];
  timers = {};
  data: any;

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    // this.getData();
    let data = this.orderService
      .getOrders()
      .subscribe((respon: orderResponse[]) => {
        this.orders = respon; // Obtener todos las ordenes
        this.orders.forEach(order => {
          this.timeForOrders(order);
        });
      });
  }
  ngOnDestroy() {
    this.data.unsubscribe();
  }
  getData() {
    this.orderService.getOrders().subscribe((respon: orderResponse[]) => {
      this.orders = respon; // Obtener todos las ordenes
      console.log("helo");

      this.orders.forEach(order => {
        this.timeForOrders(order);
      });
    });
  }

  timeForOrders(item: any) {
    const obj: object = {
      ...item
    };

    if (obj["status"] === "delivered" || obj["status"] === "canceled") {
      console.log("h");
      const realTimeOfOrders = (obj["dateProcessed"] - item.dateEntry) / 1000;
      let roundedSeconds = Math.round(realTimeOfOrders); // segundos redondeados
      let totalMinutes = roundedSeconds / 60; // de segundos a minutos
      let segundos = totalMinutes.toFixed(2).toString();
      let segundosTotales = parseInt(
        segundos.substring(segundos.indexOf(".") + 1)
      );
      let hours: any = Math.trunc(totalMinutes / 60);

      let decimalMinutes = (totalMinutes / 60).toFixed(2).toString();

      let min = parseInt(
        decimalMinutes.substring(decimalMinutes.indexOf(".") + 1)
      );
      this.timers[item.id] = {
        hours,
        min,
        sec: segundosTotales
      };
    } else {
      const newDate = Date.now();
      const realTimeOfOrders = (newDate - item.dateEntry) / 1000; // esta en segundos
      let roundedSeconds = Math.round(realTimeOfOrders); // segundos redondeados
      let totalMinutes = roundedSeconds / 60; // de segundos a minutos
      let segundos = totalMinutes.toFixed(2).toString();
      let segundosTotales = parseInt(
        segundos.substring(segundos.indexOf(".") + 1)
      );
      let hours: any = Math.trunc(totalMinutes / 60);

      let decimalMinutes = (totalMinutes / 60).toFixed(2).toString();

      let min = parseInt(
        decimalMinutes.substring(decimalMinutes.indexOf(".") + 1)
      );
      console.log(hours);
      console.log(min);

      console.log(segundosTotales);
      let interval = setInterval(() => {
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
          interval
        };
      }, 1000);
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
      //console.log("hola");
    }

    //this.data.unsubscribe();
    this.orderService.putStatus(obj, item.id).subscribe(resp => {
      //Envio objeto y id
      // console.log(resp);
    });
    // this.getData()
  }
}
