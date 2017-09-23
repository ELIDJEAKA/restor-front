import { Component, OnInit,Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UrlServer } from '../server/url.server';

@Injectable()
export class ServiceServer {
  urlserver : any;
  services : any;
 // name : any;
  constructor(private http: Http,public urlServer :UrlServer) {
    this.urlserver = this.urlServer.getUrl();
   }


serviceGET(){
      return this.http.get(this.urlserver+'service')
  .map(response => response.json())
  }

servicePOST(name) {
    console.log("Donneés Postées: "+name);
   return this.http.post(this.urlserver+'service',{"name":name})
    .map(response => response.json())
  }

  servicePUT(id,name) {
    console.log("Donneés modifié: "+name);
   return this.http.put(this.urlserver+'service/'+id,{"name":name})
    .map(response => response.json())
  }

  serviceDELETE(id:number){
    console.log("Donneés Supprimées: ");
    return this.http.delete(this.urlserver+'service/'+id)
    .map(response => response.json()) 
  }
}
