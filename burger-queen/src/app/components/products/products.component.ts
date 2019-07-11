import { Component,Injectable, OnInit } from '@angular/core';
import {UserService } from 'src/app/services/user.service';
import {product } from 'src/app/services/products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : product [] = [] ;
  desayuno :product [] = [];
  almuerzo : product []=[];
  mostrar = false;
  ocultar = true;
 
  constructor(private userservice : UserService) {
    
   }

  ngOnInit() {
   
   this.userservice.getProducts().subscribe(resp  => {    
     this.products = resp 
     this.desayuno = this.products.filter(ele => { 
       return ele.type==="Desayuno"})
     this.almuerzo = this.products.filter(ele => {
       return ele.type === "Almuerzo y cena"
     })  
    }) 
   
   

  }

  

     
 
}
