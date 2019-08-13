import {
  Component,
  OnInit,
} from "@angular/core";
import { OrdersService } from "../../../services/orders.service";
import { orderResponse } from "../../../interface/orderResponse";
import { element } from 'protractor';

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.css"]
})
export class ViewOrdersComponent implements OnInit {
  orders: orderResponse[];
  timers = {};
  chef : any;
  waiter : any;
  show:boolean= true;
  optionForChef:string[] = ['delivered', 'canceled', 'pending'];
  optionForWaiter:string[] = ['delivering', 'canceled','delivered'];

  constructor(private orderService: OrdersService) {}

  statesGeneralForChefs =(item)=>{
   return this.optionForChef.filter(element => element != item.status);
  }
  statesGeneralForWaiter =(item)=>{
  return this.optionForWaiter.filter(element=>element != item.status);
  }
  ngOnInit() {
    this.orderService.getOrders().subscribe((respon: orderResponse[]) => {
      this.orders = respon; // Obtener todos las ordenes
        console.log(respon); 

     this.waiter = this.orders.filter(element => {
       return element.status =="delivering" || element.status =="delivered" || element.status === "canceled" 
      })
      this.waiter.forEach(order=>{
        this.timeForOrders(order)
      });

     this.chef = this.orders.filter(element => {
      return element.status ==="pending" || element.status === "canceled" 
      })

      this.chef.forEach(order=>{
        this.timeForOrders(order);
      });
    });
  }

  timeForOrders(item: any) {
    const obj: object = {
      ...item
    };
    console.log(obj);
    let realTimeOfOrders: number;
    let interval:Object;
    if (obj["status"] === "delivered" || obj["status"] === "canceled") {
      realTimeOfOrders = (Date.parse(obj["dateProcessed"]) - Date.parse(obj["dateEntry"])) / 1000;      
    } else {
      const newDate =Date.now();
      realTimeOfOrders =( newDate - Date.parse(obj["dateEntry"])) / 1000;
      
      console.log(Date.parse(obj["dateEntry"]));
    } // esta en segundos
    let totalSeconds = Math.trunc(realTimeOfOrders % 60);
    let totalMinutes = Math.trunc(realTimeOfOrders / 60);
    let hours = Math.trunc(totalMinutes / 60);
    let min = Math.trunc(totalMinutes % 60);
    if (obj["status"] === "pending") {
      interval = setInterval(() => {
        totalSeconds++;
        if (totalSeconds > 59) {
          totalSeconds = 0;
        }
        if (min > 59) {
          min = 0;
        }

        this.timers[item.id] = {
          hours,
          min,
          sec: totalSeconds,
          interval //he ingresado el setInterval en una propiedad del obj timers para detenerlo
        };
      }, 1000);
    } else {
      this.timers[item.id] = {
        hours,
        min,
        sec: totalSeconds
      };

    }
   
  }

  captureData(item: any, state) {
    // debugger
    // declaramos una variable para que reciba el estado
   /* const obj: object = {
      ...item,
      status: state
    };*/
    //console.log(item.id); */
    if (state === "delivered" || state === "canceled") {
     // obj["dateProcessed"] = Date.now();
     console.log(this.timers[item.id].interval);
     
      clearInterval(this.timers[item.id].interval);
    }

    this.orderService.putStatus({status:state}, item._id).subscribe(resp => {
      console.log(resp);

    });
  }
}
