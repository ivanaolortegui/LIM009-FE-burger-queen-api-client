import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';



import {UserService} from './services/user.service'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule } from '@angular/forms';
import { OrdersService } from './services/orders.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { ViewOrdersComponent } from './components/home/view/view-orders.component';

//import { view-ordersComponent } from './components/home/view/view-orders.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormLoginComponent,
    HeaderComponent,
    ProductsComponent,
    OrdersComponent,
    ViewOrdersComponent,
     

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  
    
   
  ],
  providers: [
    UserService,
    AuthGuard,
    OrdersService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class AppModule { }
