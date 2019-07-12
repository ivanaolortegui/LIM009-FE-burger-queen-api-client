import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import { product } from './products';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
private productSource = new BehaviorSubject<Array<any>>([]); // variable que se encargara de tener el valor 

private lstProducts:Array<product>=[];
//definiendo observable
productData = this.productSource.asObservable(); 
constructor() { }

private refresh() {
  // Emitir los nuevos valores para que todos los que dependan se actualicen.
  this.productSource.next(this.lstProducts);
}

sharingProductData(product: product) {
//console.log(product);
this.lstProducts.push(product);  // next cambia el valor
this.refresh();
//console.log(this.lstProducts.length);
//push
}
//metodo para retornar la lista 
getProductOfOrders(){
  return this.lstProducts


//eliminar Producto
//Actuaizar 
//CRUD
}

}

