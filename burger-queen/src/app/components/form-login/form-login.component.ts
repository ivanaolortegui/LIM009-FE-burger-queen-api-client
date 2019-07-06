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
  "email": 'liz@gmail.com',
  "contraseña": '1234567'
}
//userModel = new UserModel();
  constructor(private userservice : UserService) { }

  ngOnInit() {
   
     //this.userservice.getAll().subscribe(resp => console.log(resp) )
   
  }
 guardar(forma : FormGroup){
  this.userservice.getToken(this.usuario).subscribe(resp => (resp) )
  
   
 }
}
