import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup} from '@angular/forms'
import {UserService } from 'src/app/services/user.service'
import { UserModel} from 'src/app/model/model.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  user : Object = {
  email: '',
  password:''

}



  constructor(private userservice : UserService,
    
            private router : Router) { }

  ngOnInit() {
   
    
  }
 guardar(forma : FormGroup) {
   console.log(forma.invalid);
   
  this.userservice.getToken(forma.value).subscribe(resp => {
    this.router.navigateByUrl('/home')
     console.log(resp) }),
   (err =>console.log(err.HttpErrorResponse))
   
  //this.userservice.getProducts().subscribe(resp => console.log(resp) )
 }
 
}
