import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import { product } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
public productSource = new BehaviorSubject<Array<any>>([]); // variable que se encargara de tener el valor 

public lstProducts:Array<product>=[];
//definiendo observable
productData = this.productSource.asObservable(); 
constructor() { }

refresh() {
  // Emitir los nuevos valores para que todos los que dependan se actualicen.
  this.productSource.next(this.lstProducts);

  
}


sharingProductData(product: product) {
console.log(product._id);
// Buscando si existe el producto seleccionado en la lista de productos
let objProduct = this.lstProducts.find(ele=>  ele._id === product._id); 
if(objProduct===undefined){
  this.lstProducts.push(product);  // next cambia el valor
  this.refresh(); 
}
console.log(this.lstProducts);
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

deleteProduct(idx : number){
    this.lstProducts.splice(idx,1)
    this.refresh();
    console.log(this.lstProducts) 
  }






}

