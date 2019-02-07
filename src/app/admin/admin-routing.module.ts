import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { BrandsComponent } from './brands/brands.component';
import {SizeComponent } from './size/size.component';

const adminroutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'brands',
        component: BrandsComponent
      },
      {
        path: 'size',
        component: SizeComponent
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(adminroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
