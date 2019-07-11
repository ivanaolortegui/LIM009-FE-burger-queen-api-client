import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormLoginComponent } from '../form-login/form-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { AppRoutingModule } from '../../app-routing.module';
import { HomeComponent } from '../home/home.component';

import { AuthGuard } from '../../guards/auth.guard';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, FormLoginComponent, HomeComponent, HeaderComponent, ProductsComponent ],
      imports: [  HttpClientModule, FormsModule, AppRoutingModule],
      providers: [UserService, AuthGuard]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', ((async() => {
    expect(component).toBeTruthy();
  })));
});
