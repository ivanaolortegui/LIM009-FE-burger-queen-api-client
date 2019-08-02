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

  ngOnInit() {
    this.orderService.getOrders().subscribe((respon: orderResponse[]) => {
      this.orders = respon; // Obtener todos las ordenes
      console.log(respon);
    });

  /*  this.chronometer = setInterval(() => {
      this.seg++;
      if (this.seg === 60) {
        this.seg = 0;
        this.min++;
        if (this.min === 0) {
          this.min = 0;
        }
      }
    }, 1000);*/
  }
    timeForOrders(item:any ){
     const obj:object={
       ...item       
     }
     const newDate= Date.now();
     const realTimeOfOrders = (newDate -item.dateEntry)/60000; // esta en minutos
    let min: any = realTimeOfOrders.toString().split(".", 2);
    let minutosTotales =parseInt(min)
    let seg:any = realTimeOfOrders.toString();
    let nose:number =  seg.indexOf(".");
    console.log(nose)
    let segundosTotales =seg.substring(nose, 2)

    console.log(segundosTotales)
     setInterval(() => {
      seg++;
      if (seg === 60) {
        seg = 0;
        min++;
        if (min === 0) {
          min = 0;
        }
      }
    }, 1000);
    console.log(min);
    console.log(seg);
    
    
    }

  captureData(item: any, state) {// debugger
// declaramos una variable para que reciba el estado    
    const obj:object = {
      ...item,
      status: state
    }
    console.log(state);
    console.log(item.id);
    if (state === "delivered" ||state===  "canceled") {   // 
     // clearInterval(this.chronometer);
    }

    this.orderService.putStatus(obj, item.id).subscribe(resp => {
      //Envio objeto y id
      console.log(resp);
    });
  }
}
