import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  day:any
  month:any
  year:any
  constructor() {
    var date = new Date();
    this.day = date.getDate();
    this.month = `0${date.getMonth()+ 1}` ;
    this.year = date.getFullYear().toString();
  }

  public exportAsExcelFile(json: any[], excelFileName: string, type1:string): void {
    XLSX.SSF.format('$#,##0.00', 12345.6789)
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName, type1);
  }

  private saveAsExcelFile(buffer: any, fileName: string, type1:string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + `_${type1}_${this.year}-${this.month}-${this.day}` + EXCEL_EXTENSION);
  }

}
