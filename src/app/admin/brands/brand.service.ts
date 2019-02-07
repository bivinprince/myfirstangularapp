import { Injectable } from '@angular/core';
import { Brand } from './brand';
import { BRANDS } from './mock-brands';
import { Observable, of } from 'rxjs';
import { AdminmessageService } from '../adminmessage.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private messageservice: AdminmessageService) {    
   }

  getBrands(): Observable<Brand[]> {    
    this.messageservice.add('Brandservice: Fetched Brands..');
    return of(BRANDS);

  }
}
