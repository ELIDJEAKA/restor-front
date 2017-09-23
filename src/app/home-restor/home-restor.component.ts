import { Component, OnInit } from '@angular/core';


import { UserServer } from '../server/user.server';
import { UrlServer } from '../server/url.server';

@Component({
  selector: 'app-home-restor',
  templateUrl: './home-restor.component.html',
  styleUrls: ['./home-restor.component.css']
})

export class HomeRestorComponent implements OnInit {
  user: any;
  constructor(public userServer: UserServer, public urlServer :UrlServer) { }

  ngOnInit() {
    this.userServer.userFindOrCreate().subscribe(res => this.user = res );
  }

}
