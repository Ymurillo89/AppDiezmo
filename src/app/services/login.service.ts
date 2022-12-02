import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  login(user:string, password:string){
    return  this.http.get<number>(environment.url+`LoginCntlr/Login/${user}/${password}`)
  }
}
