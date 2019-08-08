import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup} from '@angular/forms'
import {UserService } from 'src/app/services/user.service'
import { UserModel} from 'src/app/model/model.model'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  
  user: UserModel= {
  email: '',
  password: ''
}
  constructor(private userservice : UserService, private router : Router) { }

  ngOnInit() {
  }
 saveFormFromUser(forma) {
   if (forma.invalid){return;}
  Swal.fire({
    allowOutsideClick: false,
    type: "info",
    text: "Espere por favor..."
  });
  Swal.showLoading()
  this.userservice.getToken(forma.value).subscribe(resp => {
    Swal.close()
    this.router.navigateByUrl('/home')
     console.log(resp) },
   (err )=>{
    console.log(err.error)
    let text="";
    if(err.error == "Cannot find user"){
      text="Usuario no existe 😔"
    } else {
      text = "Password incorrecto 🤔"
    }
    Swal.fire({
      allowOutsideClick: false,
      type: "error",
      text: text,
      confirmButtonColor:"#293092"
      });
   });
 }
 
}
