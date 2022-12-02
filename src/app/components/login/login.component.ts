import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup ;
  alert:boolean=false;

  constructor(private router: Router,
              private loginService:LoginService) 
  {
    this.formLogin = new FormGroup({
      userName:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]),
    })


  }

  ngOnInit(): void {
    
  }

  login(){
    this.alert=false;
    
    let user = this.formLogin.controls['userName'].value;
    let password = this.formLogin.controls['password'].value;

    if(!this.formLogin.valid){
      alert("Error al validar formulario")
    }else{
      this.loginService.login(user, password).subscribe(response=>{
        if(response == 1){
          localStorage.setItem("userName",user)
          localStorage.setItem("password","si")
          this.router.navigate(['nav/home'])

        }else{
          this.alert=true;
        }
      })  
    }
    
  }

}
