import { Component, OnInit, Input } from '@angular/core';
import { Brand } from '../brand';

@Component({
  selector: 'app-branddetail',
  templateUrl: './branddetail.component.html',
  styleUrls: ['./branddetail.component.css']
})
export class BranddetailComponent implements OnInit {
@Input() branddetail:Brand;
  constructor() { }

  ngOnInit() {
  }

}
