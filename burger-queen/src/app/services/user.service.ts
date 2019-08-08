import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'
import { User } from '../interface/user'
import { product } from '../interface/products';
import{ orderResponse} from '../interface/orderResponse'



@Injectable()
export class UserService {

  Usertoken: string;
  userEmail:string;
  url = 'http://165.22.166.131:8080/auth';
  
  constructor(private http: HttpClient) {
   this.readToken()
  

   }

    
  getToken(user: User) {
    return this.http.post(this.url, user).pipe(map(resp => {     
      this.saveToken(resp['token'], user.email)  
      return resp;
    }))
  }
 // obtener links de los productos
  getProducts() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.Usertoken
    });
    return this.http.get<product[]>("http://165.22.166.131:8080/products", { headers: headers })
      .pipe(map(response => response)
      )
  }
  getIdUsers (){   
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.Usertoken
    });
    return this.http.get(`http://165.22.166.131:8080/users/${this.userEmail}`, { headers: headers })
      .pipe(map(response => response)
      )
  }

  getOrder (orderForBackend: any){
     const headers = new HttpHeaders({
     'Authorization': 'Bearer ' + this.Usertoken,
     //'Content-Type': 'application/json',
     
    }); 
    
   return  this.http.post("http://165.22.166.131:8080/orders", orderForBackend, {headers: headers})
   //.pipe(map(res => console.log(res)));
    
  }



  // *****
  //definir como observable
  // tener el suscribe en el componente que lo va a usar (product, order)

//Guardar y leer token en el LocalStorage
  saveToken(Token: string, email:string) {
    this.Usertoken = Token
    this.userEmail= email
    localStorage.setItem('token', Token);
    localStorage.setItem('email',email)
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.Usertoken = localStorage.getItem('token');
    } else {
      this.Usertoken = '';
    }
    console.log( this.Usertoken);
    return this.Usertoken;
  }

  // Usuario Autenticado 
  authUser() : boolean{
   return this.Usertoken.length > 2;
    //console.log(this.Usertoken.length > 2)
  // return true;
  }

  logout(){
  localStorage.removeItem('token');
  }

}