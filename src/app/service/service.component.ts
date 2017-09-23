import { Component, OnInit } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ServiceServer } from '../server/service.server';
import { UrlServer } from '../server/url.server';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  modifier = false;
  services : any ;
  serviceUpdate:any;
  constructor(private http: Http,public serviceServer :ServiceServer,public urlServer :UrlServer) {

   }
  
  ngOnInit(): void {
    this.serviceGET();
    
  }

  serviceGET(){
      this.serviceServer.serviceGET().subscribe(res => this.services = res );
  }

  servicePOST(name) {
    //console.log("Donneés Postées: "+this.services.name);
    this.serviceServer.servicePOST(name)
      .subscribe(res => {
        this.services.name = "";
        this.services = res;
        this.serviceGET();
      });
  }

   servicePUT(id,name) {
    //console.log("Donneés Postées: "+this.services.name);
    this.serviceServer.servicePUT(id,name)
      .subscribe(res => {
        this.services.name = "";
        this.services = res;
        this.serviceGET();
      });
  }

  serviceDELETE(id){
    console.log("Donneés Supprimées: ");
    this.serviceServer.serviceDELETE(id)
    .subscribe(res => {
        this.services = res;
        this.serviceGET();
      });
  }

  serviceFORM(id){

    let service =this.services.find(function(req){
      return req.id==id;
    })
    console.log(service)
    this.serviceUpdate = service;
    this.modifier = true;
  }
}
