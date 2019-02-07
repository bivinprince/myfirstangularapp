import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    
    <div class="btn-group btn-group-sm">
      <button type="button" class="btn btn-secondary" routerLink="/admin/users" routerLinkActive="active">Users</button>&nbsp;
      <button type="button" class="btn btn-secondary" routerLink="/admin/brands" routerLinkActive="active">Brands</button>&nbsp;
      <button type="button" class="btn btn-secondary" routerLink="/admin/size" routerLinkActive="active">Size</button>&nbsp;
      
    </div>
    
    <router-outlet></router-outlet>	
    
    <app-messages></app-messages>

  `,
  styles: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
