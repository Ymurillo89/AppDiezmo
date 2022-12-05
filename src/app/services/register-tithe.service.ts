import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetBrother } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegisterTitheService {

  constructor(private http:HttpClient) { }

  getBrother(){
    return this.http.get<GetBrother[]>(environment.url+`RegisterTitheCntlr/GetBrother`)
  }
  
  setBrother(brother:any){
    return  this.http.post(environment.url+`RegisterTitheCntlr/SetBrother`,brother)
  }




}
