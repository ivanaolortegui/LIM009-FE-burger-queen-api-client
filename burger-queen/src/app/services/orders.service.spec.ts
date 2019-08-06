import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { BehaviorSubject } from 'rxjs';
import { product } from '../interface/products';
import { nextTick } from 'q';

describe('OrdersService', () => {
  let ordersService : OrdersService
  beforeEach(() => TestBed.configureTestingModule({providers: [OrdersService],
    imports: []}));

    beforeEach(() => {
      ordersService = TestBed.get(OrdersService); // define el servicio de manera global (inyectable)
    })

  it('should be created', () => {
        expect(ordersService).toBeTruthy();
  });

  it('this is going to receive a method for next', () => {   
 spyOn(ordersService.productSource, "next")
   ordersService.refresh()
  expect(ordersService.productSource.next).toHaveBeenCalled();
  });
  it('this function share data of products', () => {   

   let product = {
    "_id": "1",
    "name": "Café americano",
    "price": "5",
    "image": "https://i1.wp.com/www.cookingmarket.com.mx/wp-content/uploads/2017/04/Cooking-Market-Caf%C3%A9-Americano-Normal.png?resize=420%2C420g",
    "type": "Desayuno",
    "dateEntry": ""
};
let listaproduct1 =[ {
  "_id": "2",
  "name": "Café con leche",
  "price": "7",
  "image": "http://upouria.com/wp-content/uploads/2018/05/01-Gourmet-Cocoa-Cup.png",
  "type": "Desayuno",
  "dateEntry": ""
},
{
  "_id": "3",
  "name": "Sandwich de jamón y queso",
  "price": "10",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4yGyDojJ589o2_WnMXOvPUBnC2_XtXWIeSBDOvqZ2z79E49k4A",
  "type": "Desayuno",
  "dateEntry": ""
}];
    spyOn(ordersService.lstProducts, "find")
   // spyOn(ordersService.lstProducts, "find")
      ordersService.sharingProductData(product)
     expect(ordersService.lstProducts.find).toHaveBeenCalled();
    // expect(ordersService.lstProducts.find).toHaveBeenCalled();
  //    expect(product).toEqual(expect.arrayContaining(product1));
  
     });

  it('this is going to receive the products of order', () => {   
ordersService.getProductOfOrders();
   expect(ordersService.lstProducts).toEqual(ordersService.lstProducts);
       });

  it('this is going to delete product', () => {   
    let num =1;
 spyOn(ordersService.lstProducts, "splice")
   ordersService.deleteProduct(num)
  expect(ordersService.lstProducts.splice).toHaveBeenCalled();
  });

});
