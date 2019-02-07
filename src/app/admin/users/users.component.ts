import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {USERS} from './mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  pagetitle: string;
  singleuser: User;
  userlist: User[];

  onClick(user:User): void{    
    this.singleuser = user;
  }

  constructor() {
    this.pagetitle = 'users';
    this.userlist = USERS;  
  }

  ngOnInit() {

  }



}
