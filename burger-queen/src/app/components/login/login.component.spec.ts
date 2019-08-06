import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from '../form-login/form-login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {AppRoutingModule} from 'src/app/app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { from } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';
import {APP_BASE_HREF} from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [ LoginComponent, FormLoginComponent, HomeComponent ],
      imports: [        
        FormsModule,
        ReactiveFormsModule, 
        HttpClientModule ,
        AppRoutingModule         
      ],
      providers:[
        UserService, {provide: APP_BASE_HREF, useValue : '/' }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

