import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetBrother, GetTithe } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegisterTitheService {

  constructor(private http:HttpClient) { }

  getBrother(){
    return this.http.get<GetBrother[]>(environment.url+`RegisterTitheCntlr/GetBrother`)
  }

  getTithe(){
    return this.http.get<GetTithe[]>(environment.url+`RegisterTitheCntlr/GetTithe`)
  }
  
  setBrother(brother:any){
    return  this.http.post(environment.url+`RegisterTitheCntlr/SetBrother`,brother)
  }

  setTithe(id:string,quantity:string){
    //debugger
    return this.http.post(environment.url+`RegisterTitheCntlr/SetTithe/${id}/${quantity}`,id)
  }

  deleteBrother(id:number){
    return this.http.delete(environment.url+`RegisterTitheCntlr/DeleteBrother/${id}`)
    
  }



}
