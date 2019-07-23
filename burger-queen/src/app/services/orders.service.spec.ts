import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { BehaviorSubject } from 'rxjs';
import { product } from '../interface/products';

describe('OrdersService', () => {
  let ordersService : OrdersService
  beforeEach(() => TestBed.configureTestingModule({providers: [OrdersService],
    imports: []}));

  it('should be created', () => {
    const service: OrdersService = TestBed.get(OrdersService);
    expect(service).toBeTruthy();
  });

  it('function refresh', () => {

    let productSource = new BehaviorSubject<Array<any>>([]); // variable que se encargara de tener el valor 
    let lstProducts=[];
   
    ordersService.refresh()
    //expect().toBe();
  });

});
