import { Component, OnInit } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TableServer } from '../server/table.server';
import { UrlServer } from '../server/url.server';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  
  tables : any;
  constructor(private http: Http, public tableServer: TableServer, public urlServer :UrlServer) {
     
   }
  ngOnInit(): void {
     this.tableGET();
    }

  tableGET(){
    this.tableServer.tableGET().subscribe(res => this.tables= res);
    }
  
  tablePOST(name,state) {
    console.log("Donneés Postées: "+this.tables.name+" "+this.tables.state);
    this.tableServer.tablePOST(name,state)
      .subscribe(res => {
        this.tables.name = "";
        this.tables = res;
        this.tableGET();
      });
  }

  

  tableDELETE(id){
    console.log("Donneés Supprimées: ");
    this.tableServer.tableDELETE(id)
    .subscribe(res => {
        //this.tables = res;
        this.tableGET();
      });
  }

}
