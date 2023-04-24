import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
   
    constructor(private router:Router, public fb:FormBuilder,private myservice:MyserviceService ,private cookie:CookieService){
      // if(this.cookie.check('name')){
      //   router.navigate(['/home']);
      // }
    }
  
    interval:any;
  ngOnInit(): void {
    this.interval = setInterval(()=>{
      if(this.cookie.check('name')){
        this.router.navigate(['/home']);
      }
    },50)
  }
    // name = new FormControl('');
      profileForm = this.fb.group({
      Emailaddress:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z1-9\d$@$!%*?&].{8,}')]]
      });
  
    title = 'task';
    visible:boolean=true;
    changetype:boolean=true;
  
    viewpass(){
      this.visible = !this.visible;
      this.changetype= !this.changetype;
    }
    gotohome(){
      this.router.navigate(['home'])
    }
    signIn(){

// localStorage.setItem('name','any local')

// sessionStorage.setItem('name',JSON.stringify(this.profileForm.value.Emailaddress))
// sessionStorage.setItem('password',JSON.stringify(this.profileForm.value.password))

      if(this.profileForm?.valid){
        this.myservice.data=this.profileForm.value?.Emailaddress
        let encryptemail=btoa( JSON.stringify(this.profileForm.value.Emailaddress));
        // sessionStorage.setItem('name',encryptemail);
        this.cookie.set('name',encryptemail,1)

        let encryptpass=btoa(JSON.stringify(this.profileForm.value.password));
        // sessionStorage.setItem('password',encryptpass);
        this. cookie.set('password',encryptpass,1)
        this.router.navigate(['/home'])

        // this.cookie.set('encryptemail',1) 
        // console.log(this.profileForm.value);
         this.gotohome();
        
      
      }

    }
    ngOnDestroy(): void {
      clearInterval(this.interval);
    }
  }
  
