import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'
import { User } from '../interface/user'
import { product } from '../interface/products';
import{ orderResponse} from '../interface/orderResponse'



@Injectable()
export class UserService {

  Usertoken: string
  url = 'http://localhost:3000/login';
  
  constructor(private http: HttpClient) {
   this.readToken()

   }

    
  getToken(user: User) {
    return this.http.post(this.url, user).pipe(map(resp => {     
      this.saveToken(resp['accessToken'])
      return resp;
    }))
  }
 // obtener links de los productos
  getProducts() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.Usertoken
    });
    return this.http.get<product[]>("http://localhost:3000/660/products", { headers: headers })
      .pipe(map(response => response)
      )
  }
  getIdUsers (){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.Usertoken
    });
    return this.http.get<User>("http://localhost:3000/660/users", { headers: headers })
      .pipe(map(response => response)
      )
  }

  getOrder (orderForBackend: any){
     const headers = new HttpHeaders({
     // 'Authorization': 'Bearer ' + this.Usertoken,
     //'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json',
     
    }); 
   
    
   return  this.http.post("http://localhost:5000/orders", orderForBackend, {headers: headers})
   //.pipe(map(res => console.log(res)));
    
  }



  // *****
  //definir como observable
  // tener el suscribe en el componente que lo va a usar (product, order)

//Guardar y leer token en el LocalStorage
  saveToken(Token: string) {
    this.Usertoken = Token
    localStorage.setItem('token', Token);
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.Usertoken = localStorage.getItem('token');
    } else {
      this.Usertoken = '';
    }
    return this.Usertoken;
  }

  // Usuario Autenticado 
  authUser() : boolean{
    return this.Usertoken.length > 2;
  }

  logout(){
  localStorage.removeItem('token');
  }

}