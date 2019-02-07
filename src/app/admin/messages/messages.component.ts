import { Component, OnInit } from '@angular/core';
import { AdminmessageService } from '../adminmessage.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent implements OnInit {

  constructor(public messageservice: AdminmessageService) {
    
   }

  ngOnInit() {
  }

}
