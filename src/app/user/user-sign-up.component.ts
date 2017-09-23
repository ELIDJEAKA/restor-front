import { Component, OnInit } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserServer } from '../server/user.server';
import { UrlServer } from '../server/url.server';


@Component({
  selector: 'app-user',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user.component.css']
})
export class SignUpUserComponent implements OnInit {

  users = {
  "name":"",
  "email":"",
  "identite":"",
  "username":"",
  "password":""
 // "avatar":""
  };

  constructor(private router: Router,private http: Http, public userServer: UserServer, public urlServer :UrlServer) {
    //this.userServer.logOut(); 
    console.log(this.users);
     
   }
  ngOnInit() {
    
  }

  userPOST(users) {
    //console.log(users);
    this.userServer.userPOST(users)
      .subscribe(res => {      
        console.log(res)
        if (res.status == 201){
          //this.router.navigate(['/sign-in'])
          setTimeout((router: Router) => {
              this.router.navigate(['/sign-in']);
          }, 10);
        }
      }); 
  }
}
