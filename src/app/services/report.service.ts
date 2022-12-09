import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetReport } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  getReport(period:string){
    return this.http.get<GetReport[]>(environment.url+`ReportCntlr/GetReport/${period}`)
  }

}
