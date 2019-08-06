import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormLoginComponent } from './form-login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AppRoutingModule } from '../../app-routing.module';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import {APP_BASE_HREF} from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';
import { OrdersComponent } from '../orders/orders.component';

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;
  let inputEl: DebugElement;
  let formEl: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginComponent, HomeComponent, LoginComponent],
      imports:[FormsModule, HttpClientModule, AppRoutingModule],
      providers:[UserService, {provide: APP_BASE_HREF, useValue : '/' }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('input'));
    formEl = fixture.debugElement.query(By.css('form'))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Deberia de llamar a "guardar" al dar submit al form', () => {
    spyOn(component, 'saveFormFromUser');
    formEl.triggerEventHandler('submit', null);
    expect(component.saveFormFromUser).toHaveBeenCalled();
  })

});
