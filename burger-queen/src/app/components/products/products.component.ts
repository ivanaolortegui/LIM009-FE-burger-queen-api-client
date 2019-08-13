import { Component,Injectable, OnInit } from '@angular/core';
import {UserService } from 'src/app/services/user.service';
import {product } from 'src/app/interface/products'
import {OrdersService} from 'src/app/services/orders.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : product [] = [] ;
  desayuno :product [] = [];
  almuerzo : product []=[];
  mostrar : boolean= false;
  
 
  constructor(private userservice : UserService, private orderservice :OrdersService) {
    
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
  selectedProduct(product : product){
  //console.log(product);  
  this.orderservice.sharingProductData(product)
  
  }
 
}
