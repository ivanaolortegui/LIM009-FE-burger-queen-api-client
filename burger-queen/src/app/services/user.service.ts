import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators'
import { User } from './user'
import {UserModel} from '../model/model.model'


@Injectable()
export class UserService {
  url = 'http://localhost:3000/user';
  

  constructor(private http: HttpClient) { }
  getToken (user : User ){
    return this.http.post(this.url,user).pipe(take(1))
  }

  getAll() {
    return this.http.get(this.url )
    .pipe(map(response => console.log(response) )
   )  
  } 
}