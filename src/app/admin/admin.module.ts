import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { BrandsComponent } from './brands/brands.component';
import { SizeComponent } from './size/size.component';
import { UserdetailComponent } from './users/userdetail/userdetail.component';
import { BranddetailComponent } from './brands/branddetail/branddetail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [AdminComponent, UsersComponent, BrandsComponent, SizeComponent, UserdetailComponent, BranddetailComponent, MessagesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
