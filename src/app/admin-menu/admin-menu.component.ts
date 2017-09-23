import { Component, OnInit } from '@angular/core';
import { UserServer } from '../server/user.server';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

import { AuthguardGuard } from '../authguard.guard'

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  user :any 
  constructor(public userServer: UserServer,public authguard:AuthguardGuard,private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  ngOnInit() {
  }

  logOut(){
      this.userServer.logOut();
  }
  
}
