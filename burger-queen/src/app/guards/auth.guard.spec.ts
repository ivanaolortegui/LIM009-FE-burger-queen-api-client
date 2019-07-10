import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { UserService } from '../services/user.service';
import { HttpClientModule, } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { HeaderComponent } from '../components/header/header.component';
import { ProductsComponent } from '../components/products/products.component';
import { FormLoginComponent } from '../components/form-login/form-login.component';
import { FormsModule } from '@angular/forms';


describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[HomeComponent, LoginComponent,FormLoginComponent, HeaderComponent, ProductsComponent],
      imports:[HttpClientModule, AppRoutingModule, FormsModule ],
      providers: [AuthGuard,  UserService],
      
      
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
