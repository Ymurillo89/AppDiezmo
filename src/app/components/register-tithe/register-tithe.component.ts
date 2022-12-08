import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetBrother, GetTithe } from 'src/app/models/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { RegisterTitheService } from 'src/app/services/register-tithe.service';

@Component({
  selector: 'app-register-tithe',
  templateUrl: './register-tithe.component.html',
  styleUrls: ['./register-tithe.component.css']
})
export class RegisterTitheComponent implements OnInit {
  
  formNewBrother: FormGroup;
  formNewTithe:FormGroup;

  brotherDelete:number=0;
  dataBrother:GetBrother[]=[];
  dataTithe:GetTithe[]=[];
  dataFilterTithe:GetTithe[]=[];
  keyword='fullName';
  f=0;  
  f2=0;  

 
  constructor(private registerBrotherService :RegisterTitheService,
              private alert:AlertService
    
    ) {
    this.formNewBrother = new FormGroup({
      identification:new FormControl("",[Validators.required]),
      name:new FormControl("",[Validators.required]),
      lastName:new FormControl("",[Validators.required]),

    }),
    this.formNewTithe = new FormGroup({
      idRows:new FormControl("",[Validators.required]),
      quantity:new FormControl("",[Validators.required])
    })
   }

  ngOnInit(): void {
    this.getBrother();
    this.getTithe();
  }

  //Traer información del hermano
  getBrother(){
    this.registerBrotherService.getBrother().subscribe(response=>{
      this.dataBrother = response;
      //console.log(this.dataBrother)
    })
  }

  getTithe(){
    this.registerBrotherService.getTithe().subscribe(response=>{
      this.dataTithe = response;
      this.dataFilterTithe = response;
      console.log(this.dataTithe)
    })
  }


  //Registrar hermano
  setBrother(){
    //debugger
    let dataBrother=[];

    dataBrother.push({
      identification:(this.formNewBrother.controls['identification'].value).toString(),
      name:this.formNewBrother.controls['name'].value,
      lastName:this.formNewBrother.controls['lastName'].value,
    })

    if(this.formNewBrother.valid){
      this.registerBrotherService.setBrother(dataBrother).subscribe(response=>{

        if(response==1){

          this.alert.ShowSwalBasicSuccess("Éxito","Registro realizado correctamente") 
          this.formNewBrother.reset();
          this.getTithe();
        }else{

          this.alert.ShowSwalBasicError("Error al guardar","No se ha podido guardar la información")       
        } 

      })
    }

  }

  //Asignamos el valor del autocomplete al formulario
  selectBrother(event:GetBrother){   
    this.formNewTithe.controls['idRows'].setValue(event.idRows)    
  }

  //Guardamos la información del Diezmo
  setTithe(){

    let idRow = this.formNewTithe.controls['idRows'].value;
    let quantity =this.formNewTithe.controls['quantity'].value;
    
    if(this.formNewTithe.valid){      
      this.registerBrotherService.setTithe(idRow,quantity).subscribe(response=>{
        if(response==1){
          this.alert.ShowSwalBasicSuccess("Éxito","Registro realizado correctamente") 
          this.formNewTithe.reset();
          this.getTithe();
        }else{
          this.alert.ShowSwalBasicError("Error al guardar","No se ha podido guardar la información")       
        }
      })
    }    
  }

  //Seleccionamos el hermano a eliminar
  selectBrotherDelete(event:GetBrother){   
    this.brotherDelete=event.idRows;    
  }

  //Eliminar hermano
  dropBrother(){

    if(this.brotherDelete != 0){
      this.registerBrotherService.deleteBrother(this.brotherDelete).subscribe(response=>{
        if(response==1){
          this.alert.ShowSwalBasicSuccess("Éxito","Eliminado") 
          this.brotherDelete = 0
          this.getBrother();
        }else{
          this.alert.ShowSwalBasicError("Error al guardar","No se ha podido eliminar la información")       
        }
      })
    }
    
  }
  selectFilterBrother(event:GetBrother){
    this.dataFilterTithe=this.dataFilterTithe.filter(e=>e.fullName == event.fullName )  ;
  }

  resetFilter(){
    this.dataFilterTithe = this.dataTithe;
  }

  

  //Suma del Diezmo
  sumTitthe(idRow:number){
    let sum=0;
    let dataLin:any=[];

    this.dataTithe.forEach(e=>{
      
      e.getTitheLin.forEach(r=>{
        if(e.idRows == idRow){
          sum+= r.tithe
          r.sumTithe = sum
        }
               
      })      
    })
    
    //console.log(dataLin)


    return sum
    
  }
}
