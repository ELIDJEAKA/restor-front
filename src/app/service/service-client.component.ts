import { Component, OnInit } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ServiceServer } from '../server/service.server';
import { UrlServer } from '../server/url.server';

@Component({
  selector: 'app-service-client',
  templateUrl: './service-client.component.html',
  styleUrls: ['./service-client.component.css']
})
export class ServiceClientComponent implements OnInit {


  services : any ;
  constructor(private http: Http,public serviceServer :ServiceServer,public urlServer :UrlServer) {

   }
  
  ngOnInit(): void {
    this.serviceGET();
  }

  serviceGET(){
      console.log("ee")
      this.serviceServer.serviceGET().subscribe(res => this.services = res );
  }

  
}
