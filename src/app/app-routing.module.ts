import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Artboard2Component } from './artboard2/artboard2.component';
import { Artboard3Component } from './artboard3/artboard3.component';
import { Artboard5Component } from './artboard5/artboard5.component';


const routes: Routes = [

  { path:'',component: HomeComponent},
{ path:'', component: SidenavComponent},
{ path: 'art2', component: Artboard2Component},
{ path: 'art3', component: Artboard3Component},   
{path: 'art5', component: Artboard5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
