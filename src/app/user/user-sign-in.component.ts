import { Component, OnInit } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserServer } from '../server/user.server';
import { UrlServer } from '../server/url.server';


@Component({
  selector: 'app-user',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user.component.css']
  //providers:[UserServer,UrlServer]
})
export class SignInUserComponent implements OnInit {

  users = {
  "username":"",
  "password":""
  };
  user :any
  constructor(private router: Router,private http: Http, public userServer: UserServer, public urlServer :UrlServer) {
    //this.userServer.logOut();
    console.log(this.users);   
   }
  ngOnInit() {
    
  }

  userAUTH(users){
    this.userServer.userAUTH(users)
    .subscribe(res => { 
        //this.userByUsernameGET(users.username)
        console.log(JSON.parse(JSON.stringify(res.json())))
        if (res.status == 201){
          localStorage.setItem('user',JSON.stringify(res.json()));
          console.log(localStorage.getItem('user'))
          //console.log(users)
          this.userServer.setUserLoggedIn();
         // console.log(this.userServer.getUserLoggedIn());
          //this.router.navigate(['/admins-dashboard'])
          location.reload();
          setTimeout((router: Router) => {
              this.router.navigate(['/admins-dashboard']);
          },200);
        }
      }); 
  }

}

