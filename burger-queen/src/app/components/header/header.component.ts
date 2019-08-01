import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
home:boolean;
viewOrder:boolean;
constructor(private router:Router, private user:UserService) {
  console.log(  this.router.url
    );
    if(this.router.url ==="/home"){
      this.home=false;
      this.viewOrder=true;
    }else{
      this.home=true;
      this.viewOrder=false;
    }
  
   
 }

  ngOnInit() {
      
  }
  
  getOut(){
    this.user.logout();
    this.router.navigateByUrl('/login')
  }


}
