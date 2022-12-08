import { Component, OnInit } from '@angular/core';
import { PeriodService } from 'src/app/services/period.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  dataPeriod!: any[];

  
  constructor( private periodGeneratorService: PeriodService,) { }

  ngOnInit(): void {
    this.GetPeriod();
  }

  GetPeriod(){
    this.dataPeriod = this.periodGeneratorService.GeneratePeriod();    
    
    //this.formReportHilaza.controls.period.setValue(`${date.getFullYear()}${(month <= 9 ? '0'+month : month)}`)
    
  }

}
