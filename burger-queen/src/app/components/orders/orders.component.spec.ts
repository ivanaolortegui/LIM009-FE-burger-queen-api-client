import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { AuthGuard } from '../../guards/auth.guard';
import { OrdersService } from '../../services/orders.service';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { of, Observable } from 'rxjs';

const dataMock = [{
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
},
{
  "_id": "3",
  "name": "Sandwich de jamón y queso",
  "price": "10",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4yGyDojJ589o2_WnMXOvPUBnC2_XtXWIeSBDOvqZ2z79E49k4A",
  "type": "Desayuno",
  "dateEntry": ""
}];

class OrderServiceMock{
  productData(){
    return new Observable(observer => {
      setTimeout(() => {
          observer.next(dataMock);
      }, 1000);
});
  }
}

class UserServiceMock{

}

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersComponent ],
      imports: [
        HttpClientModule      
       
      ],
      providers: [
        OrdersService,
        { provide: UserService, useClass: UserServiceMock }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',()  => {
    expect(component).toBeTruthy();
  });
});
