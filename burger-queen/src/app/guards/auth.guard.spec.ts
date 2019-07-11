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

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginComponent,LoginComponent,HomeComponent ,HeaderComponent,ProductsComponent],
      providers: [AuthGuard, UserService,],
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
});
