import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent    
  },
  {
    path: 'home',
    component: HomeComponent    
  },
  {
    path: 'about',
    component: AboutusComponent    
  }, 
  {
    path: 'contact',
    component: ContactusComponent    
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'       
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
     
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule] 
})
export class AppRoutingModule { }
