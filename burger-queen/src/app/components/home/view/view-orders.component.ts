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
  timers = {}
  
  constructor(private orderService: OrdersService) {}
 
  ngOnInit() {

    
    this.getData  () 

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
  getData  () {
    this.orderService.getOrders().subscribe((respon: orderResponse[]) => {
      this.orders = respon; // Obtener todos las ordenes
      this.orders.forEach(order => {
        this.timeForOrders(order)
      })
    });
  }
  
  timeForOrders(item: any) {
    const obj: object = {
      ...item
    };
    const newDate = Date.now();
    const realTimeOfOrders = (newDate - item.dateEntry) / 60000; // esta en minutos
    let min: any = Math.trunc(realTimeOfOrders);
    let seg: any = realTimeOfOrders.toFixed(2).toString();
    let segundosTotales = parseInt(seg.substring(seg.indexOf(".") + 1));
    let hours:any = Math.trunc(min/60);
    console.log( hours );
    
    console.log(segundosTotales);
    let interval = setInterval(() => {
      segundosTotales++;
      if (segundosTotales > 59) {
        segundosTotales = 0;
        min++;
        /* if (min === 0) {
          min = 0;
        } */
      } if(min > 59){
        min = 0;
       // hours++
      } 

     // console.log(min);
      this.timers[item.id]= {
        hours,
        min,
        sec: segundosTotales
      }
    //  console.log("se" + segundosTotales);
    }, 1000);
    if (item.status ==="delivered" || item.status ==="canceled") {
      // clearInterval(interval)
      console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
} 

       
   //return interval; 
  }

  captureData(item: any, state) {
    // debugger
    // declaramos una variable para que reciba el estado
    const obj: object = {
      ...item,
      status: state
    };
    console.log(state);
    console.log(item.id);
    
  

    this.orderService.putStatus(obj, item.id).subscribe(resp => {
      //Envio objeto y id
      console.log(resp);
     this.getData  () 
    });
  }
}
