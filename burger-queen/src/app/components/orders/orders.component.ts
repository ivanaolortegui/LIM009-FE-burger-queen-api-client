import { Component, OnInit } from '@angular/core';
import {OrdersService, } from 'src/app/services/orders.service';
import { product } from 'src/app/services/products';
import { order } from '../../services/order';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
    orderProduct : product[]=[]; //productos seleccionados mostrados en el panel derecho
    userId:string;
    cliente:string;
    lstPedido:order[]=[];//lista con propiedades que seran enviados al backend - base de datos
    order : order = new order(); // variable auxiliar

    constructor( private orderservice :OrdersService) {
      this.orderservice.productData.subscribe(resp =>{
        this.orderProduct=resp; // se llena la data mediante el servicio
        //recorremos la lista de productos mostrados en el panel derecho
        console.log(this.orderProduct.length);
        this.orderProduct.forEach( (ele) => {
         // Si la lista no tiene elementos se le agrega uno nuevo con cantidad por defecto
          if(this.lstPedido.length==0){
            let ord = this.order;
            console.log(this.order);
            ord.idProducto = ele.productId;
            ord.qty=1;
            this.lstPedido.push(ord);  
          }
          else {  
            let objProduct= this.lstPedido.find(item => item.idProducto === ele.productId);//Si ya existe ese objeto con esa cantidad no se le vuelve agregar 
            if(objProduct===undefined){ //Si no existe el objeto se le agrega
              this.order=new order();
              console.log(this.order);
              this.order.idProducto = ele.productId;
              this.order.qty=1;
              this.lstPedido.push(this.order);
            }
            
          }

          


        });

        
      })
     }

  ngOnInit() {
  
  }

  deleteproduct(idx : number) {
    console.log(idx);
    this.orderservice.deleProduct(idx);
  } 
 
  incrementQuantity(idx : number){
     ++this.lstPedido[idx].qty;
  }


  decrementQuantity(idx : number){
    if(this.lstPedido[idx].qty>1) --this.lstPedido[idx].qty;
  }
 
  
}
