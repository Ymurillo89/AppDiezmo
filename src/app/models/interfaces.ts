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
    tithe: number;
    dateTithe: string;
}