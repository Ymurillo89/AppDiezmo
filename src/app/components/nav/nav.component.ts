import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showNavBar = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    debugger
    let username=localStorage.getItem("userName")
    if(username== "" || username== null || username== undefined){
      this.router.navigate(['login'])
      
    }else{
      this.showNavBar= true;
    }
   
    
  }

  logOut(){
    this.router.navigate(['login'])
    localStorage.clear();
  }
  
}
