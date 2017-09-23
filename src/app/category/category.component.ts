import { Component, OnInit } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { ServiceServer } from '../server/service.server';
import { UrlServer } from '../server/url.server';
import { CategoryServer } from '../server/category.server';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  services:any;
  categories :any;
  constructor(private http: Http,public serviceServer :ServiceServer,public urlServer :UrlServer,public categoryServer : CategoryServer) {
     this.serviceGET();
      //console.log(this.Services);  
   }
  
ngOnInit(): void {
    this.categoryGET();
 }

serviceGET(){
      this.serviceServer.serviceGET().subscribe(res => this.services = res );
  }

categoryGET(){
      this.categoryServer.categoryGET().subscribe( res => this.categories = res );
  }


  categoryPOST(name,service) {
    this.categoryServer.categoryPOST(name,service)
      .subscribe(res => {
        this.categories = "";
        this.categories = res;
        this.categoryGET();
      });
  }

  categoryDELETE(id:number){
    console.log("Donneés Supprimées: ");
    this.categoryServer.categoryDELETE(id)
    .subscribe(res => {
        this.categories = res;
        this.categoryGET();
      });
  }
}
