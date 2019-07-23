import { TestBed, fakeAsync } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { UserService } from "./user.service";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { product } from '../interface/products';




describe("UserService", () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    expect(userService).toBeTruthy();
  });

  it("should be created", () => {
    const users= 
      {
        userId: "1",
        email: "ivana@gmail.com",
        password: "$2a$10$u04HgHbJAureCDVa87m7A.NfG8S9izMV.GQerhuggj6v.pr/YKOfK"
      }
    ;
    userService.getIdUsers().subscribe(resp => {
      expect(resp).toBe(users);
    });
    const req = httpTestingController.expectOne('http://localhost:3000/660/users');
    expect(req.request.method).toBe("GET");
    req.flush(users);
  });
  it("should be created  Token", () => {
    const token = 
      {
        accessToken: "$2a$10$u04HgHbJAureCDVa87m7A.NfG8S9izMV.GQerhuggj6v.pr/YKOfK",
      };
    userService.getToken({"email": "ivana@gmail.com", password: "$2a$10$u04HgHbJAureCDVa87m7A.NfG8S9izMV.GQerhuggj6v.pr/YKOfK"}).subscribe(resp => {
      expect(resp).toBe(token);
    });
    const req = httpTestingController.expectOne('http://localhost:3000/login');
    expect(req.request.method).toBe("POST");
    req.flush(token);
  });

  it("should be created  Products", () => {
    let products = [
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
      expect(resp).toEqual(products);
    });
    const req = httpTestingController.expectOne('http://localhost:3000/660/products');
    expect(req.request.method).toBe("GET");
    req.flush(products);
  }); 

  it("should be created  Token", () => {
    const dataInput = {
      userId: "1", 
      client: "jose", 
      product:[
      {
        "_id": "2",
        "qty":1
      }
    ]}
    
   const orders = {
    "_id": "order1",
    "userId": "1",
    "client": "jose",
    "products": [
        { "qty": 2,
            "product": { "_id": "5",
            "name": "Hamburguesa Simple",
            "price": "10",
            "image": "https://image.flaticon.com/icons/svg/135/135592.svg",
            "type": "Almuerzo y cena",
            "dateEntry": ""
                
            }
        },
         { "qty": 4,
            "product": {  "_id": "4",
            "name": "Jugo de frutas natural",
            "price": "7",
            "image": "https://image.flaticon.com/icons/svg/1902/1902947.svg",
            "type": "Desayuno",
            "dateEntry": ""
                
            }
        }
        
        
    ],
    "status": "pending",
    "dateEntry": ""
}
    userService.getOrder(dataInput).subscribe(resp => {
      expect(resp).toBe(orders);
    });
    const req = httpTestingController.expectOne('http://localhost:5000/orders');
    expect(req.request.method).toEqual("POST");
    req.flush(orders);
  });


});
