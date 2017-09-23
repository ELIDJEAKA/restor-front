import { Component, OnInit,Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UrlServer{
    constructor(private http:Http){}
    url : any

    getUrl(){
        return this.url = "http://localhost:1337/";
    }

    goBack(): void {
        //this.location.back();
    }
}