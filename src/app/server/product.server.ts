import { Component, OnInit,Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UrlServer } from '../server/url.server';

@Injectable()
export class ProductServer {

    urlserver : any;
    //Categories:any;
    products :any;
  constructor(private http: Http,public urlServer :UrlServer) {
      this.urlserver = this.urlServer.getUrl();    
   }

  productGET(){
      return this.http.get(this.urlserver+'product')
  .map(response => response.json())
  }

  submitData(formGroup){
        //const URL = this.url;
        const res = this.http.post(this.urlserver+'product',formGroup)
                        .map(response => response.json())
        return res;
    }

  productDELETE(id:number){
    console.log("Donneés Supprimées: ");
    return this.http.delete(this.urlserver+'product/'+id)
    .map(response => response.json())
  }
}
