import { Component, OnInit } from '@angular/core';
import {Brand} from './brand';
import { BrandService } from './brand.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  pagetitle: string;
  selectedbrand: Brand;
  brandlist: Brand[];


  constructor(private brandService: BrandService) {
    this.pagetitle = 'brands';        
  }


  ngOnInit() {
    this.getBrands();
  }

  getBrands(): void {    
    this.brandService.getBrands().subscribe(brandlist => this.brandlist = brandlist);

  }
  onClick(brand: Brand): void {
    this.selectedbrand = brand;
  }


}
