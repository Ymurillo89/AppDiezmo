export interface GetBrother{
    idRows:number,
    fullName:string;
}

export interface GetTithe {
    idRows: number;
    identification: string;
    fullName: string;
    getTitheLin: GetTitheLin[];
}
  
export  interface GetTitheLin {
    idRows:number
    tithe: number;
    dateTithe: string;
    sumTithe?:number;
}

export interface GetReport {
    fullName: string;
    tithe: number;
    dateTithe: string;
  }