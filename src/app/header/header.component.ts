import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApihitingService } from '../apihiting.service';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuarray:any;
  profile:any; 
  
  constructor(public router:Router, public cookie:CookieService,private dialog:MatDialog,public apihitting:ApihitingService,public myservice:MyserviceService){}

  gotoLogOut(){
    this.router.navigate(['/login']);
    this.cookie.deleteAll();
   }
   panelOpenState = false;
   toggle(){
    this.myservice.istoggle=!this.myservice.istoggle;
   }
   ngOnInit(): void {
    this.menuarray = localStorage.getItem('menu');
    this.menuarray = JSON.parse(atob(this.menuarray))
    console.log(this.menuarray);
  
    this.profile =localStorage.getItem('data');
    this.profile = JSON.parse(atob(this.profile))
    
}
}
