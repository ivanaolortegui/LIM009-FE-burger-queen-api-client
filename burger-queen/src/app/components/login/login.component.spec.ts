import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from '../form-login/form-login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {AppRoutingModule} from 'src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [ LoginComponent, FormLoginComponent,HomeComponent,HeaderComponent,ProductsComponent ],
      imports: [        
        FormsModule,
        ReactiveFormsModule, 
        HttpClientModule ,
        AppRoutingModule         
      ],
      providers:[
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});

