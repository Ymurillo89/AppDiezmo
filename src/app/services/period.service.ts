import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  constructor() { }
  GeneratePeriod(){
    let dataPeriod: any[] = [];
    let date = new Date();
    const monthNames = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
      "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
    ];

    for (let index = 2023; index <= date.getFullYear(); index++) {
      for (let indexMonth = 1; indexMonth <= 12; indexMonth++) {
        dataPeriod.push({ period: `${index}${(indexMonth <= 9 ? '0'+indexMonth  : indexMonth)}`, description: `${index}${(indexMonth <= 9 ? '0'+indexMonth  : indexMonth)} - ${monthNames[indexMonth-1]}` });
      }
    }

    return dataPeriod;
  }
}
