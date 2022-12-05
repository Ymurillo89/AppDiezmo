import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterTitheComponent } from './components/register-tithe/register-tithe.component';
import { ReportComponent } from './components/report/report.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,    
    LoginComponent, 
    HomeComponent,
    RegisterTitheComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,    
    HttpClientModule,
    AutocompleteLibModule,
    CommonModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
