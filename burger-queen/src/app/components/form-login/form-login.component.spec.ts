import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormLoginComponent } from './form-login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import {AppRoutingModule} from 'src/app/app-routing.module';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';



describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginComponent,LoginComponent,HomeComponent,HeaderComponent,ProductsComponent ],
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
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (async() => {
    expect(component).toBeTruthy();
  }));

});
