import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterTitheService {

  constructor(private http:HttpClient) { }

  setBrother(brother:any){
    return  this.http.post(environment.url+`RegisterBrotherCntlr/SetBrother`,brother)
  }
}
