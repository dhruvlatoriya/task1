import { Component, DoCheck, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {MatDialog} from '@angular/material/dialog';
import { SessionexpiredComponent } from '../sessionexpired/sessionexpired.component';
import { ApihitingService } from '../apihiting.service';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit,OnDestroy{
  panelOpenState = false;

  showFiller = false;
  id:any;
  menuarray:any;
  constructor(public router:Router, public cookie:CookieService,private dialog:MatDialog,public apihitting:ApihitingService,public myservice:MyserviceService){}
  ngOnInit(): void {
    this.menuarray = localStorage.getItem('menu');
    this.menuarray = JSON.parse(atob(this.menuarray))
    console.log(this.menuarray);
    
    this.id =  setInterval(() => {
      if(!this.cookie.check('name')){
        // this.openDialog();
        this.router.navigate(['/login']); 
      }
    }, 100);

  }
  ngOnDestroy(): void {
    clearInterval(this.id)
  }
  //   ngDoCheck(): void {
  //   this.id =  setTimeout(() => {
  //       if(!this.cookie.check('name')){
  //         alert("Your session has expired")
  //         this.router.navigate(['/login']); 
  //       }
  //     }, 500);
  //  }
   gotoLogOut(){
    
    this.cookie.deleteAll();
    this.router.navigate(['/login']);
   }
   gotoProfile(){
    this.router.navigate(['/profile'])
   }

  //  @HostListener('mouseenter')
  //  onClick() {
  //   setTimeout(() => {
  //     if(!this.cookie.check('name'))
  //     this.router.navigate(['/login']);
  //   }, 3000);
  //  }
  openDialog() {
    this.dialog.open(SessionexpiredComponent);
  }
 
  
  
}


