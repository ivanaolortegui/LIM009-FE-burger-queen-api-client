import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormLoginComponent } from './components/form-login/form-login.component';
import {Router}from '@angular/router';
import {Location}from '@angular/common';
import {routes} from 'src/app/app-routing.module'
import { UserService } from './services/user.service';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent, LoginComponent,FormLoginComponent,HomeComponent,HeaderComponent,ProductsComponent
      ],
      providers:[
        UserService
      ]
      
    });
    router = TestBed.get(Router); 
    location = TestBed.get(Location)

    fixture = TestBed.createComponent(AppComponent); 
    router.initialNavigation(); 
  }));
  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to " " redirects you to /Login', fakeAsync(() => {
    router.navigate(["**"]).then(() => {
      expect(location.path()).toBe("/login");
    });
  }));

  it('navigate to "home" takes you to /home', fakeAsync(() => {
    router.navigate(["home"]).then(() => {
      expect(location.path()).toBe("/login");
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'burger-queen'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('burger-queen');
  });
  
});
