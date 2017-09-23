import { Component, OnInit,Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UrlServer } from '../server/url.server';

@Injectable()

export class UserServer{

    password : any;
    urlserver : any;
    user : any;
    headers : any;
    private isUserLoggedIn;
    private username;

    
  constructor(private router: Router,private http: Http, public urlServer :UrlServer) {
    this.urlserver = this.urlServer.getUrl();
    this.isUserLoggedIn = false;
}

setUserLoggedIn(){
    this.isUserLoggedIn = true;
}
getUserLoggedIn(){
    return this.isUserLoggedIn;
}
//find or create user if not exist
userFindOrCreate(){
    return this.http.get(this.urlserver+'user/findorcreate')
    .map(response => response.json())
}

// get all users in database
userGET(){
      return this.http.get(this.urlserver+'user')
                .map(response => response.json())
                }

//get user by username
userByUsernameGET(username){
    return this.http.get(this.urlServer+'user/:username')
                .map(response=>response.json())
}
userPOST(user) {
    //console.log("Donneés Postées: "+user.name+" "+user.email);
    return this.http.post(this.urlserver+'user/register',{
        "name" : user.name,
        "email" : user.email,
        "identite" : user.identite,
        "username" : user.username,
        "password" : user.password
        //"avatar" : user.avatar
    })
    .map(response => response)
}


userAUTH(user){
    console.log("Donneés Postées: "+user.username+" "+user.password)
    return this.http.post(this.urlserver+'user/login',{"username":user.username,"password":user.password})
    .map(response => response)
}


userDELETE(id:number){
    console.log("Donneés Supprimées: ");
    return this.http.delete(this.urlserver+'user/'+id)
    .map(response => response)
    
  }


logOut(){
          location.reload();
          setTimeout((router: Router) => {
              this.router.navigate(['/sign-in']);
          }, 100);
      //this.router.navigate(['/sign-in'])
      return localStorage.removeItem('user')
      //console.log(localStorage.getItem('user'))
  }
}
