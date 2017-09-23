import { Component, OnInit,Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { UrlServer } from '../server/url.server';

@Injectable()
export class TableServer {

  urlserver : any;
  tables : any;
  constructor(private http: Http, public urlServer :UrlServer) {
    this.urlserver = this.urlServer.getUrl();
   }
tableGET(){
      return this.http.get(this.urlserver+'table')
                .map(response => response.json())
                }

tablePOST(name,state) {
    console.log("Donneés Postées: "+name+" "+state);
    return this.http.post(this.urlserver+'table',{"name": name,"state": state})
    .map(response => response.json()) 
  }


tableDELETE(id:number){
    console.log("Donneés Supprimées: ");
    return this.http.delete(this.urlserver+'table/'+id)
    .map(response => response.json())
    
  }
}
