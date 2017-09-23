import { Component } from '@angular/core';

import { UserServer } from './server/user.server';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  authentification = false;
constructor(public userServer: UserServer){
    console.log("appcomponent : "+this.authentification)
    console.log(localStorage.getItem('user'))
    if(localStorage.getItem('user')===null){
        this.authentification = false;  
      }else
      {
        this.authentification = true; 
      }
  }
}
