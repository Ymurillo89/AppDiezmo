import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBrother, GetReport } from 'src/app/models/interfaces';
import { ExcelService } from 'src/app/services/excel.service';
import { PeriodService } from 'src/app/services/period.service';
import { RegisterTitheService } from 'src/app/services/register-tithe.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  dataPeriod!: any[];
  dataReport:GetReport[]=[];
  dataFilterReport:GetReport[]=[];
  dataBrother:GetBrother[]=[];
  keyword='fullName';
  f=0;
  
  constructor( private periodGeneratorService: PeriodService,
               private registerBrotherService :RegisterTitheService,
               private reportService:ReportService,
               private excelService: ExcelService,
               private router:Router
               ) { }

  ngOnInit(): void {    
    let username=localStorage.getItem("userName")
    if(username== "" || username== null || username== undefined){
      this.router.navigate(['login'])
    }else{
      
      this.GetPeriod();
      this.getBrother();
    }
 
  }

  GetPeriod(){
    this.dataPeriod = this.periodGeneratorService.GeneratePeriod();          
  }

  //Traer información del hermano
  getBrother(){
    this.registerBrotherService.getBrother().subscribe(response=>{     
      this.dataBrother = response;          
    })
  }

  //Obtenemos el reporte
  getReport(period:any){    
    this.reportService.getReport(period.value).subscribe(response=>{
      this.dataReport = response;
      this.dataFilterReport= response;
      
    })
  }
  
  //Seleccionams un hermano del filtro
  selectFilterBrother(event:GetBrother){
   this.dataFilterReport=this.dataFilterReport.filter(e=>e.fullName == event.fullName )  ;
  }

  //Reseteamos el filtro con el contenido original
  resetFilter(){
    this.dataFilterReport = this.dataReport;
  }

  //Generamos el excel
  generateExcel(){
    
    let data:any=[];

    this.dataFilterReport.forEach(element => {
      
      data.push({
        Nombre: element.fullName ,
        Diezmo: element.tithe,
        Fecha: element.dateTithe        
        
      })

    });
    
    this.excelService.exportAsExcelFile(data, 'Reporte-Tienda-Estado','tiendas');

  }
}
