import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersService } from 'src/app/services/orders.service';

import { ProductsComponent } from './products.component';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from '../orders/orders.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent, OrdersComponent ],
      providers:[
        UserService
      ],
      imports: [        
      
        HttpClientModule ,
  
      ],
    })
    .compileComponents();
  }));
  let ordersService : OrdersService
  let userService : UserService
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    ordersService = TestBed.get(OrdersService); // define el servicio de manera global (inyectable)
    userService = TestBed.get(UserService);
    httpTestingController = TestBed.get(HttpTestingController);


  })
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', ((async()  => {
    expect(component).toBeTruthy();
  })));

  it('this is going to share data of product component', () => {   
    let products = 
      {
        "_id": "1",
        "name": "Café americano",
        "price": "5",
        "image": "https://i1.wp.com/www.cookingmarket.com.mx/wp-content/uploads/2017/04/Cooking-Market-Caf%C3%A9-Americano-Normal.png?resize=420%2C420g",
        "type": "Desayuno",
        "dateEntry": ""
    };
  spyOn(ordersService, "sharingProductData")
  component.selectedProduct(products)
  expect( ordersService.sharingProductData).toHaveBeenCalled();
  });
/*
  it('this is going to filter the data of product component', () => {   
    let products1 = [
      {
        "_id": "1",
        "name": "Café americano",
        "price": "5",
        "image": "https://i1.wp.com/www.cookingmarket.com.mx/wp-content/uploads/2017/04/Cooking-Market-Caf%C3%A9-Americano-Normal.png?resize=420%2C420g",
        "type": "Desayuno",
        "dateEntry": ""
    },
    {
      "_id": "2",
      "name": "Café con leche",
      "price": "7",
      "image": "http://upouria.com/wp-content/uploads/2018/05/01-Gourmet-Cocoa-Cup.png",
      "type": "Desayuno",
      "dateEntry": ""
  }];
  userService.Usertoken = "$2a$10$u04HgHbJAureCDVa87m7A.NfG8S9izMV.GQerhuggj6v.pr/YKOfK";

    userService.getProducts().subscribe(resp => {
      expect(resp).toEqual(products1);
    });
    const req = httpTestingController.expectOne('http://localhost:3000/660/products');
    expect(req.request.method).toBe("GET");
    req.flush(products1);
  }); 
 // spyOn(ordersService, "sharingProductData")
 // component.selectedProduct(products)
//expect( ordersService.sharingProductData).toHaveBeenCalled();
*/
});
