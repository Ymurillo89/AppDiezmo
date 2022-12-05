import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterTitheService } from 'src/app/services/register-tithe.service';

@Component({
  selector: 'app-register-tithe',
  templateUrl: './register-tithe.component.html',
  styleUrls: ['./register-tithe.component.css']
})
export class RegisterTitheComponent implements OnInit {
  
  formNewBrother: FormGroup;
  dataBrother:[]=[];
  keyword='';
  constructor(private registerBrotherService :RegisterTitheService) {
    this.formNewBrother = new FormGroup({
      identification:new FormControl("",[Validators.required]),
      name:new FormControl("",[Validators.required]),
      lastName:new FormControl("",[Validators.required]),

    })
   }

  ngOnInit(): void {
  }
  //Registrar hermano
  setBrother(){
    debugger
    let dataBrother=[];

    dataBrother.push({
      identification:(this.formNewBrother.controls['identification'].value).toString(),
      name:this.formNewBrother.controls['name'].value,
      lastName:this.formNewBrother.controls['lastName'].value,
    })

    if(this.formNewBrother.valid){
      this.registerBrotherService.setBrother(dataBrother).subscribe(response=>{})
    }

  }

  selectEvent(event:Event){

  }
}
