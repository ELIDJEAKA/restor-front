import { Component, OnInit,Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UrlServer } from '../server/url.server';

@Injectable()
export class CategoryServer {

    urlserver : any;
    categories :any;
    constructor(private http: Http,public urlServer :UrlServer) {
        this.urlserver = this.urlServer.getUrl();        
    }


  categoryGET(){
     return this.http.get(this.urlserver+'category')
  .map(response => response.json())
    
  }


  categoryPOST(name,service) {
    console.log("Donneés Postées: "+name);
   return  this.http.post(this.urlserver+'category',{"name":name,"service":service})
    .map(response => response.json())
  }

  categoryDELETE(id:number){
    console.log("Donneés Supprimées: ");
   return this.http.delete(this.urlserver+'category/'+id)
    .map(response => response.json())
  }
}
