import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterTitheComponent } from './components/register-tithe/register-tithe.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [{path: '',component:LoginComponent},
  { path: 'nav',component: NavComponent, children:[{path:'Diezmo',component:RegisterTitheComponent},{path:'Reporte',component:ReportComponent},{path:'home',component:HomeComponent}],},
  /* { path:'**',} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
