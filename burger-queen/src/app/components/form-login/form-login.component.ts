import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup} from '@angular/forms'
import {UserService } from 'src/app/services/user.service'
import { UserModel} from 'src/app/model/model.model'
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

usuario = {
 
  "contraseña": 'ivana',
  "pais":'peru'
}
userModel = new UserModel();
  constructor(private userservice : UserService) { }

  ngOnInit() {
   
    
   
  }
 guardar(forma : FormGroup){
  this.userservice.getToken(forma.value).subscribe(resp =>  console.log(resp) ),
   (err =>console.log(err.HttpErrorResponse))
   this.userservice.getProducts().subscribe(resp => console.log(resp) )
 }
 
}
