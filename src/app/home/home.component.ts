import { Component, DoCheck, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {MatDialog} from '@angular/material/dialog';
import { SessionexpiredComponent } from '../sessionexpired/sessionexpired.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit,OnDestroy{

  showFiller = false;
  id:any;
  constructor(public router:Router, public cookie:CookieService,private dialog:MatDialog){}
  ngOnInit(): void {
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
    this.router.navigate(['/login']);
    this.cookie.deleteAll();
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


