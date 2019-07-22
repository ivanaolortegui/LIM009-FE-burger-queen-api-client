import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormLoginComponent } from '../components/form-login/form-login.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../components/products/products.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { APP_BASE_HREF } from '@angular/common';


class MockRouter {
  navigate(path) {}
}

describe('AuthGuard', () => {
   beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginComponent,LoginComponent,HomeComponent ,HeaderComponent,ProductsComponent, OrdersComponent],
      providers: [AuthGuard, UserService, {provide: APP_BASE_HREF, useValue : '/' }],
      imports: [        
       HttpClientModule ,
       RouterModule,
       AppRoutingModule,
       FormsModule,
      ],
     
    });
  }); 

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  describe('canActivate', () => {
    let authGuard: AuthGuard;
    let UserService;
    let router;

    it('should return true for a logged in user', () => {
      UserService = { authUser: () => true };
      router = new MockRouter();
      authGuard = new AuthGuard(UserService, router);
      expect(authGuard.canActivate()).toEqual(true);
    });
    it('should navigate to home for a logged out user', () => {
      UserService = { authUser: () => false };
      router = new MockRouter();
      authGuard = new AuthGuard(UserService, router);
      spyOn(router, 'navigate');

      expect(authGuard.canActivate()).toEqual(false);
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });
  });
});

 